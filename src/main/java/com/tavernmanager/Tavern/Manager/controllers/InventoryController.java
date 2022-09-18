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
    public ResponseEntity<Object> useItem(@PathVariable String travellerName, @PathVariable String foodName ){
        Optional<TravellerModel> traveller = travellerService.getTraveller(travellerName);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(travellerName + " not found!");
        }
        Optional<FoodModel> food = foodService.getFood(foodName);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " not found!");
        }

        int stock = food.get().discountStock(ONE_ITEM);


        return ResponseEntity.status(HttpStatus.OK).body(travellerService.addInInventory(traveller.get(), food.get()));
    }
}
