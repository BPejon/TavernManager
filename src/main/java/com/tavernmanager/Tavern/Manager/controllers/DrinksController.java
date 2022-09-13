package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
}
