package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/drinks")
public class DrinksController {


    @Autowired
    private DrinksService drinksService;

    @PostMapping
    public ResponseEntity<Object> insertDrink(@RequestBody DrinksModel drink){
        DrinksModel newDrink = drinksService.insertDrink(drink);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{name}").buildAndExpand(newDrink.getName()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Object> getDrink(@PathVariable String name){
        Optional<DrinksModel> drink = drinksService.getDrink(name);
        if(!drink.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(drink);
    }

    @GetMapping
    public ResponseEntity<List<DrinksModel>> getAllDrinks(){
        List<DrinksModel> allDrinks = drinksService.getAllDrinks();
        return ResponseEntity.status(HttpStatus.OK).body(allDrinks);
    }
}
