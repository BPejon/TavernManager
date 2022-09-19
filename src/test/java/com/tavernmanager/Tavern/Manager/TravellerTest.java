package com.tavernmanager.Tavern.Manager;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import lombok.Builder;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

//17/09 Frodo bday
@ExtendWith(MockitoExtension.class)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class TravellerTest {

    //@Mock creates a mock implementation for the classes you need.
    @Mock
    private TravellerRepository travellerRepository;

    //@InjectMocks creates an instance of the class and injects the mocks that are marked with the annotations @Mock into it.
    //dependencies of the mocks are usually called Stub
    @InjectMocks
    private TravellerService travellerService;




    @Test
    void saveOneTraveller(){
        //Arrange
        final var expectedTraveller = TravellerModel.builder().name("FireKeeper").province("Firelink Shrine").classType("Priest").level(15).coins(20).build();
        when(travellerRepository.save(any(TravellerModel.class))).thenReturn(expectedTraveller);

        //act
        final var actual = travellerService.createTraveller(new TravellerModel());

        //assert
        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedTraveller);
        verify(travellerRepository, times(1)).findById(anyString()); //Verifica o numero de acessos ao repositorio
        verifyNoInteractions(travellerRepository);
    }

    @Test
    void should_find_and_return_one_student(){
        //Arrange
        final var expectedTraveller = TravellerModel.builder().name("FireKeeper").province("Firelink Shrine").classType("Priest").level(15).coins(20).build();
        when(travellerRepository.findById(expectedTraveller.getName())).thenReturn(Optional.of(expectedTraveller));

        //Act
        final var actual = travellerService.getTraveller(expectedTraveller.getName());

        //Assert
        //TODO algum erro com Optional
        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedTraveller);
        verify(travellerRepository,times(1)).findById(anyString());
        verifyNoInteractions(travellerRepository);
    }

    @Test
    void should_delete_one_traveller(){
        doNothing().when(travellerRepository).deleteById(anyString());

        travellerService.deleteTraveller("FireKeeper");

        verify(travellerRepository,times(1)).deleteById(anyString());
        verifyNoMoreInteractions(travellerRepository);

    }
}
