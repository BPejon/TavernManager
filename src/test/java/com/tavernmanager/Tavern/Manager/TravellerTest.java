package com.tavernmanager.Tavern.Manager;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import static org.mockito.Mockito.*;

//17/09 Frodo bday
@ExtendWith(MockitoExtension.class)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class TravellerTest {

    @Mock
    private TravellerRepository travellerRepository;

    @InjectMocks
    private TravellerService travellerService;



    @Test
    void saveOneTraveller(){
        //Arrange
        final var traveller = TravellerModel.builder().name("Firekeeper").province("Firelink Shrine").classType("Priest").level(15).coins(20).build();
        when(travellerRepository.save(any(TravellerModel.class))).thenReturn(traveller);

        //act
        final var actual = travellerService.createTraveller(new TravellerModel());

        //assert
        //assertThat(actual).usingRecursiveComparison().isEqualTo(st);


    }
}
