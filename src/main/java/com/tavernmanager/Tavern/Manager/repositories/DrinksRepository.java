package com.tavernmanager.Tavern.Manager.repositories;

import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinksRepository extends JpaRepository<DrinksModel, String> {
}
