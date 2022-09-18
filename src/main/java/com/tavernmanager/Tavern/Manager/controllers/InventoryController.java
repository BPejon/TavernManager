package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping
public class InventoryController {
    private static int ONE_ITEM = 1;
    private TravellerService travellerService;
    private DrinksService drinksService;
    private FoodService foodService;

    public InventoryController(TravellerService travellerService, DrinksService drinksService, FoodService foodService) {
        this.travellerService = travellerService;
        this.drinksService = drinksService;
        this.foodService = foodService;
    }

    @PutMapping("/{travellerName}/use/{foodName}")
    public ResponseEntity<Object> useFood(@PathVariable String travellerName, @PathVariable String foodName ){
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
        }
        Optional<FoodModel> food = foodService.getFood(foodName);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.removeFromInventory(traveller.get(), food.get()));
    }

    @PutMapping("/{travellerName}/use/{drinkName}")
    public ResponseEntity<Object> useDrink(@PathVariable String travellerName, @PathVariable String drinkName) {
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if (!traveller.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
        }
        Optional<FoodModel> drink = foodService.getFood(drinkName);
        if (!drink.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " not found!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(travellerService.removeFromInventory(traveller.get(), drink.get()));

    }
}
