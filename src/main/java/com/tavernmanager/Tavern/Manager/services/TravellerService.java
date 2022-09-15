package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravellerService {

    private TravellerRepository travellerRepository;

    public TravellerService(TravellerRepository travellerRepository) {
        this.travellerRepository = travellerRepository;
    }

    public TravellerModel createTraveller(TravellerModel traveller) {
        return travellerRepository.save(traveller);
    }

    public Optional<TravellerModel> getTraveller(String name) {
        return travellerRepository.findById(name);
    }

    public List<TravellerModel> getAllTravellers() {
        return travellerRepository.findAll();
    }

    public void deleteTraveller(String name) {
        travellerRepository.deleteById(name);
    }

    public TravellerModel addInInventory(TravellerModel traveller, DrinksModel drink) {
        traveller.addDrinksInInventory(drink);

        return travellerRepository.save(traveller);
    }

    public TravellerModel addInInventory(TravellerModel traveller, FoodModel food) {
        traveller.addFoodInInventory(food);
        return travellerRepository.save(traveller);
    }
}
