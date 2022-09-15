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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/shop")
public class ShopController {
    private static int ONE_ITEM = 1;
    @Autowired
    private TravellerService travellerService;

    @Autowired
    private DrinksService drinksService;

    @Autowired
    private FoodService foodService;

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

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addDrinkInventory(traveller.get(), drink.get()));
    }

//    @PutMapping("/{travellerName}/buyfood/{foodName}")
//    private ResponseEntity<Object> buyOneFood(@PathVariable String travellerName, @PathVariable String foodName){
//        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
//        if(!traveller.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
//        }
//        Optional<FoodModel> food = foodService.getFood(foodName);
//        if(!food.isPresent()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
//        }
//
//        int result = traveller.get().discountCoins(food.get().getPrice());
//        if(result == -1){
//            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(travellerName + " doesn't have necessary coins to buy!");
//        }
//    }

    //Get inventory drink

    //Get all inventory Drink

    //Get inventory food

    //Get all inventory food


}
