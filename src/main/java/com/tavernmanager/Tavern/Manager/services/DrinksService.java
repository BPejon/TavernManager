package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.repositories.DrinksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DrinksService {

    @Autowired
    private DrinksRepository drinksRepository;

    public DrinksModel insertDrink(DrinksModel drink) {

    }
}
