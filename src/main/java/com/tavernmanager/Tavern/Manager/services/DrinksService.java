package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.repositories.DrinksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DrinksService {

    @Autowired
    private DrinksRepository drinksRepository;


    public DrinksModel insertDrink(DrinksModel drink) {
        return drinksRepository.save(drink);
    }

    public Optional<DrinksModel> getDrink(String name) {
        return drinksRepository.findById(name);
    }

    public List<DrinksModel> getAllDrinks() {
        return drinksRepository.findAll();
    }

    public void delete(String drinkName) {
        drinksRepository.deleteById(drinkName);
    }
}
