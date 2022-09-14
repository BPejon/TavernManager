package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.EntityListeners;
import javax.swing.text.html.Option;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@RestController
@RequestMapping("/traveller")
@EntityListeners(AuditingEntityListener.class)
public class TravellerController {

    @Autowired
    private TravellerService travellerService;

    @PostMapping
    public ResponseEntity<Object> createTraveller(@RequestBody TravellerModel traveller){
        TravellerModel newTraveller = travellerService.createTraveller(traveller);

        //retorna a URI de acesso ao novo objeto
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{name}").buildAndExpand(newTraveller.getName()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping(value = "/{name}")
    public ResponseEntity<Object> getTraveller(@PathVariable String name){
        Optional<TravellerModel> traveller = travellerService.getTraveller(name);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Traveller not found!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(traveller);
    }

    @GetMapping
    public ResponseEntity<List<TravellerModel>> getAllTraveller(){
        List<TravellerModel> allTravellers = travellerService.getAllTravellers();
        return ResponseEntity.status(HttpStatus.OK).body(allTravellers);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Object> updateTraveler(@PathVariable String name, @RequestBody TravellerModel traveller){
        Optional<TravellerModel> updateTraveller = travellerService.getTraveller(name);
        if(!updateTraveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(traveller + " Not Found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(travellerService.createTraveller(traveller));
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Object> deleteTraveller(@PathVariable String name){
        Optional<TravellerModel> traveller = travellerService.getTraveller(name);
        if(!traveller.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(name + " not Found!");

        travellerService.deleteTraveller(traveller.get().getName());
        return ResponseEntity.status(HttpStatus.OK).body(name + " Removed successfully");
    }
}
