package com.tavernmanager.Tavern.Manager.controllers;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
@RequestMapping("/traveller")
@EntityListeners(AuditingEntityListener.class)
public class TravellerController {

    private TravellerService travellerService;

    public TravellerController(TravellerService travellerService) {
        this.travellerService = travellerService;
    }

    @Operation(summary = "Create a new Traveller")
    @PostMapping
    public ResponseEntity<Object> createTraveller(@RequestBody TravellerModel traveller){
        TravellerModel newTraveller = travellerService.createTraveller(traveller);

        //retorna a URI de acesso ao novo objeto
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{name}").buildAndExpand(newTraveller.getName()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Find for one Traveller")
    @GetMapping(value = "/{name}")
    public ResponseEntity<Object> getTraveller(@PathVariable String name){
        Optional<TravellerModel> traveller = travellerService.getTraveller(name);
        if(!traveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Traveller not found!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(traveller);
    }

    @Operation(summary = "Find all Travellers")
    @GetMapping
    public ResponseEntity<Page<TravellerModel>> getAllTraveller(@PageableDefault(page = 0, size = 5, sort= "name", direction = Sort.Direction.ASC) Pageable pageable){
        Page<TravellerModel> allTravellers = travellerService.getAllTravellers(pageable);
        return ResponseEntity.status(HttpStatus.OK).body(allTravellers);
    }

    @Operation(summary = "Update Traveller information")
    @PutMapping("/{name}")
    public ResponseEntity<Object> updateTraveller(@PathVariable String name, @RequestBody TravellerModel traveller){
        Optional<TravellerModel> updateTraveller = travellerService.getTraveller(name);
        if(!updateTraveller.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(traveller + " Not Found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(travellerService.createTraveller(traveller));
    }

    @Operation(summary = "Delete Traveller")
    @DeleteMapping("/{name}")
    public ResponseEntity<Object> deleteTraveller(@PathVariable String name){
        Optional<TravellerModel> traveller = travellerService.getTraveller(name);
        if(!traveller.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(name + " not Found!");

        travellerService.deleteTraveller(traveller.get().getName());
        return ResponseEntity.status(HttpStatus.OK).body(name + " Removed successfully");
    }
}
