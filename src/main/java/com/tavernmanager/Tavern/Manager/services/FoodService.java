package com.tavernmanager.Tavern.Manager.services;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.repositories.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {


    private FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public FoodModel insertFood(FoodModel food) {
        return foodRepository.save(food);
    }

    public Optional<FoodModel> getFood(String name) {
        return foodRepository.findById(name);
    }

    public List<FoodModel> getAllFood() {
        return foodRepository.findAll();
    }

    public void delete(String name) {
        foodRepository.deleteById(name);
    }
}
