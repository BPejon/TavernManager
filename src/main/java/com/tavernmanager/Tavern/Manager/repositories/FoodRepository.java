package com.tavernmanager.Tavern.Manager.repositories;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<FoodModel, String> {
}
