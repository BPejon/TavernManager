package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.EntityListeners;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/food")
@EntityListeners(AuditingEntityListener.class)
public class FoodController {

    private FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @Operation(summary = "Insert a new Food")
    @PostMapping
    public ResponseEntity<Object> insertFood(@RequestBody FoodModel food){
        FoodModel newFood = foodService.insertFood(food);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{name}").buildAndExpand(newFood.getName()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Retrieves a Food from the store")
    @GetMapping("/{name}")
    public ResponseEntity<Object> getFood(@PathVariable String name){
        Optional<FoodModel> food = foodService.getFood(name);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Food not found!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(food);
    }

    @Operation(summary = "Get all food from the Store")
    @GetMapping
    public ResponseEntity<Page<FoodModel>> getAllFood(@PageableDefault Pageable pageable){
        Page<FoodModel> allFoods = foodService.getAllFood(pageable);
        return ResponseEntity.status(HttpStatus.OK).body(allFoods);
    }

    @Operation(summary = "Update Food information")
    @PutMapping("/{foodName}")
    public ResponseEntity<Object> updateFood(@PathVariable String foodName, @RequestBody FoodModel food){
        Optional<FoodModel> updateFood = foodService.getFood(foodName);
        if(updateFood.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + "Not Found");
        return ResponseEntity.status(HttpStatus.OK).body(foodService.insertFood(food));
    }

    @Operation(summary = "Delete Food from Shop")
    @DeleteMapping("/{foodName}")
    public ResponseEntity<Void> deleteFood(@PathVariable String foodName){
        Optional<FoodModel> updateFood = foodService.getFood(foodName);
        if(updateFood.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        foodService.delete(updateFood.get().getName());
        return ResponseEntity.noContent().build();

    }
}
