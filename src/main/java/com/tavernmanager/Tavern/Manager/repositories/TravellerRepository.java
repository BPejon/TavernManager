package com.tavernmanager.Tavern.Manager.repositories;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellerRepository extends JpaRepository<TravellerModel,String> {
}
