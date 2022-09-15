package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
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

    private DrinksService drinksService;

    public DrinksController(DrinksService drinksService) {
        this.drinksService = drinksService;
    }

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

    @PutMapping("/{drinkName}") // Quando coloco outro nome ele cria ao inves de atualizar
    public ResponseEntity<Object> updateDrink (@PathVariable String drinkName, @RequestBody DrinksModel drink){
        Optional<DrinksModel> updateDrink = drinksService.getDrink(drinkName);
        //Comparar nomes
//        if(drinkName!= drink.getName())
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("Drink id's are not the same");
        if(!updateDrink.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " Not Found!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(drinksService.insertDrink(drink));
    }

    @DeleteMapping("/{drinkName}")
    public ResponseEntity<Object> deleteDrink(@PathVariable String drinkName){
        //Check if exists
        Optional<DrinksModel> drink = drinksService.getDrink(drinkName);
        if(!drink.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(drinkName + " Not Found");

        drinksService.delete(drink.get().getName());
        return ResponseEntity.status(HttpStatus.OK).body(drinkName + " deleted successfully");
    }

}
