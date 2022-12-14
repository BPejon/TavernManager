package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import io.swagger.v3.oas.annotations.Operation;
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

    @Operation(summary = "Buy one or more Drinks from shop and put on Travellers' Inventory")
    @RequestMapping(value = {"/{travellerName}/buydrink/{drinkName}","/{travellerName}/buydrink/{drinkName}/{items}"}, method = RequestMethod.PUT)
    public ResponseEntity<Object> buyDrink(@PathVariable String travellerName, @PathVariable String drinkName, @PathVariable Optional<Integer> items){
        int itemsNumber;
        if(!items.isPresent()) {
            itemsNumber = ONE_ITEM;
        }
        else{
            itemsNumber = items.get();
        }
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");

        Optional<DrinksModel> drink = drinksService.getDrink(drinkName);
        if(!drink.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " Not Found!");

        //Tirar coins do traveller
        int coins = traveller.get().discountCoins(drink.get().getPrice()*itemsNumber);
        if(coins == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");

        //tirar do estoque
        int stock = drink.get().discountStock(itemsNumber);
        if(stock == -1)
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(drinkName + " doesn't have stock for this item!");
        drinksService.insertDrink(drink.get());

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), drink.get()));
    }
   //Java n??o possui default parameters -> Ele resolve com overloading, varargs, nulls, optional class

       //?? possivel fazer urls opicionais??
        //Al??m disso seria uma boa pr??tica?? Pelo menos n precisaria reutilizar muito c??digo

    //Quantidade normalmente ?? passada no Body por motivos de simplifica????o de URL( imagine diversos parametros) al??m de seguran??a do c??digo
    //pq o Json ?? criptografado
    @Operation(summary = "Buy one or more Food and save into Travallers inventory")
    @RequestMapping(value = {"/{travellerName}/buyfood/{foodName}/{items}", "/{travellerName}/buyfood/{foodName}"}, method = RequestMethod.PUT)
    public ResponseEntity<Object> buyFood(@PathVariable String travellerName, @PathVariable String foodName, @PathVariable Optional<Integer> items){
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

    @Operation(summary = "Sell a food from Travellers to the Store")
    @DeleteMapping("/{travellerName}/sellfood/{foodName}")
    public ResponseEntity<Object> sellFood(@PathVariable String travellerName, @PathVariable String foodName){
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
        }
        Optional<FoodModel> food = foodService.getFood(foodName);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
        }

        traveller.get().addCoins(food.get().getPrice());

        food.get().reStock(ONE_ITEM);
        foodService.insertFood(food.get());

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.removeFromInventory(traveller.get(), food.get()));
    }

    @Operation(summary = "Sell a drink from Traveller to the Shop")
    @DeleteMapping("/{travellerName}/selldrink/{drinkName}")
    public ResponseEntity<Object> sellDrink(@PathVariable String travellerName, @PathVariable String drinkName){
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");

        Optional<DrinksModel> drink = drinksService.getDrink(drinkName);
        if(!drink.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " Not Found!");

        //Tirar coins do traveller
        int coins = traveller.get().addCoins(drink.get().getPrice());

        //tirar do estoque
        int stock = drink.get().addStock(ONE_ITEM);
        drinksService.insertDrink(drink.get());

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.removeFromInventory(traveller.get(), drink.get()));
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
//    @PutMapping("/{travellerName}/buyfood/{foodName}/{itemsNumber}") //Pq "={itemsNumber} n??o funciona e /{itemsNumber} Funciona?
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

}
