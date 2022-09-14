package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
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

    @Autowired
    private FoodService foodService;

    @PostMapping
    public ResponseEntity<Object> insertFood(@RequestBody FoodModel food){
        FoodModel newFood = foodService.insertFood(food);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{name}").buildAndExpand(newFood.getName()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Object> getFood(@PathVariable String name){
        Optional<FoodModel> food = foodService.getFood(name);
        if(!food.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Food not found!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(food);
    }

    @GetMapping
    public ResponseEntity<List<FoodModel>> getAllFood(){
        List<FoodModel> allFoods = foodService.getAllFood();
        return ResponseEntity.status(HttpStatus.OK).body(allFoods);
    }

    @PutMapping("/{foodName}")
    public ResponseEntity<Object> updateFood(@PathVariable String foodName, @RequestBody FoodModel food){
        Optional<FoodModel> updateFood = foodService.getFood(foodName);
        if(!updateFood.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + "Not Found");
        return ResponseEntity.status(HttpStatus.OK).body(foodService.insertFood(food));
    }

    @DeleteMapping("/{foodName}")
    public ResponseEntity<Object> deleteFood(@PathVariable String foodName){
        Optional<FoodModel> updateFood = foodService.getFood(foodName);
        if(!updateFood.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(foodName + " Not Found!");

        foodService.delete(updateFood.get().getName());
        return ResponseEntity.status(HttpStatus.OK).body(foodName+" Deleted Successfully");

    }
}
