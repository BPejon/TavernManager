package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/shop")
public class ShopController {
    private static int ONE_ITEM = 1;

    private TravellerService travellerService;

    private DrinksService drinksService;

    private FoodService foodService;

    public ShopController(TravellerService travellerService, DrinksService drinksService, FoodService foodService) {
        this.travellerService = travellerService;
        this.drinksService = drinksService;
        this.foodService = foodService;
    }

    @PutMapping("/{travellerName}/buydrink/{drinkName}")
    private ResponseEntity<Object> buyOneDrink(@PathVariable String travellerName, @PathVariable String drinkName){
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");

        Optional<DrinksModel> drink = drinksService.getDrink(drinkName);
        if(!drink.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " Not Found!");

        //Tirar coins do traveller
        int coins = traveller.get().discountCoins(drink.get().getPrice());
        if(coins == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");

        //tirar do estoque
        int stock = drink.get().discountStock(ONE_ITEM);
        if(stock == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(drinkName + " doesn't have stock for this item!");
        drinksService.insertDrink(drink.get());

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), drink.get()));
    }


//    @PutMapping("/{travellerName}/buyfood/{foodName}")
//    private ResponseEntity<Object> buyOneFood(@PathVariable String travellerName, @PathVariable String foodName){
//
//        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
//        if(!traveller.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
//        }
//        Optional<FoodModel> food = foodService.getFood(foodName);
//        if(!food.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
//        }
//
//        int coins = traveller.get().discountCoins(food.get().getPrice());
//        if(coins == -1)
//            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");
//
//        int stock = food.get().discountStock(ONE_ITEM);
//        if(stock == -1)
//            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(foodName + " doesn't have stock for this item!");
//        foodService.insertFood(food.get());
//
//        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), food.get()));
//   }
//
//    @PutMapping("/{travellerName}/buyfood/{foodName}/{itemsNumber}") //Pq "={itemsNumber} não funciona e /{itemsNumber} Funciona?
//    private ResponseEntity<Object> buyMultipleFood(@PathVariable String travellerName, @PathVariable (value = "foodName") String foodName, @PathVariable (value = "itemsNumber") int itemsNumber){
//        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
//        if(!traveller.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
//        }
//        Optional<FoodModel> food = foodService.getFood(foodName);
//        if(!food.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
//        }
//
//        int coins = traveller.get().discountCoins(food.get().getPrice()*itemsNumber);
//        if(coins == -1)
//            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");
//
//        int stock = food.get().discountStock(itemsNumber);
//        if(stock == -1)
//            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(foodName + " doesn't have stock for this item!");
//        foodService.insertFood(food.get());
//
//        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), food.get()));
//    }
   //Java não possui default parameters -> Ele resolve com overloading, varargs, nulls, optional class

       //É possivel fazer urls opicionais??
        //Além disso seria uma boa prática?? Pelo menos n precisaria reutilizar muito código
     @RequestMapping(value = {"/{travellerName}/buyfood/{foodName}/{items}", "/{travellerName}/buyfood/{foodName}"}, method = RequestMethod.PUT)
    private ResponseEntity<Object> buyFood(@PathVariable String travellerName, @PathVariable String foodName, @PathVariable Optional<Integer> items){
        int itemsNumber;
        if(!items.isPresent()) {
            itemsNumber = ONE_ITEM;
        }
        else{
            itemsNumber = items.get();
        }
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
        }
        Optional<FoodModel> food = foodService.getFood(foodName);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
        }

        int coins = traveller.get().discountCoins(food.get().getPrice()*itemsNumber);
        if(coins == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");

        int stock = food.get().discountStock(itemsNumber);
        if(stock == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(foodName + " doesn't have stock for this item!");
        foodService.insertFood(food.get());

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), food.get()));
   }


}
