package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravellerService {

    @Autowired
    private TravellerRepository travellerRepository;
    public TravellerModel createTraveller(TravellerModel traveller) {
        return travellerRepository.save(traveller);
    }

    public Optional<TravellerModel> getTraveller(String name) {
        return travellerRepository.findById(name);
    }

    public List<TravellerModel> getAllTravellers() {
        return travellerRepository.findAll();
    }
}
