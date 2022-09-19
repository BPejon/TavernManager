package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.repositories.DrinksRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DrinksService {

    private DrinksRepository drinksRepository;

    public DrinksService(DrinksRepository drinksRepository) {
        this.drinksRepository = drinksRepository;
    }


    public DrinksModel insertDrink(DrinksModel drink) {
        return drinksRepository.save(drink);
    }

    public Optional<DrinksModel> getDrink(String name) {
        return drinksRepository.findById(name);
    }

    public List<DrinksModel> getAllDrinks() {
        return drinksRepository.findAll();
    }

    public Page<DrinksModel> getAllDrinks(Pageable pageable){
        return drinksRepository.findAll(pageable);
    }

    public void delete(String drinkName) {
        drinksRepository.deleteById(drinkName);
    }
}
