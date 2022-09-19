package com.tavernmanager.Tavern.Manager;

import com.tavernmanager.Tavern.Manager.models.TravellerModel;
import com.tavernmanager.Tavern.Manager.repositories.TravellerRepository;
import com.tavernmanager.Tavern.Manager.services.TravellerService;
import lombok.Builder;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;


import javax.persistence.EntityNotFoundException;
import java.util.List;
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
    void save_one_traveller(){
        //Arrange
        final var expectedTraveller = TravellerModel.builder().name("FireKeeper").province("Firelink Shrine").classType("Priest").level(15).coins(20).build();
        when(travellerRepository.save(any(TravellerModel.class))).thenReturn(expectedTraveller);

        //Quando for salvo qualquer travelller no repositório, retorne o expectedTraveller
        //Dai dps, quando utiliza o service pra salvar um novo traveller, o repositório é chamado e ativa a linha acima, então retorna o expectedTraveller q queremos
        //Dai depois é ´so comparar o experado com o atual  pra ver se estão iguais

        //act
        final var actual = travellerService.createTraveller(new TravellerModel());

        //assert
        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedTraveller);
        verify(travellerRepository, times(1)).save(any(TravellerModel.class)); //Verifica o numero de acessos ao repositorio
        verifyNoMoreInteractions(travellerRepository);
    }

    @Test
    void should_find_and_return_one_student(){
        //Arrange
        final var expectedTraveller = Optional.of(TravellerModel.builder().name("FireKeeper")
                .province("Firelink Shrine").classType("Priest").level(15).coins(20).build());
        when(travellerRepository.findById(anyString())).thenReturn(expectedTraveller);

        //Act
        final var actual = travellerService.getTraveller(anyString());

        //Assert
        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedTraveller);
        verify(travellerRepository,times(1)).findById(anyString());
        verifyNoMoreInteractions(travellerRepository);
    }

    @Test
    void should_not_find_a_traveller_that_doenst_exists(){
        when(travellerRepository.findById(anyString())).thenReturn(Optional.empty());

        assertThat(travellerService.getTraveller(anyString())).usingRecursiveComparison().isEqualTo(Optional.empty());
        verify(travellerRepository, times(1)).findById(anyString());
        verifyNoMoreInteractions(travellerRepository);
    }

    @Test
    void should_find_and_return_all_travellers(){
        //Chama o find all e retorna 2 novos travellers
        when(travellerRepository.findAll()).thenReturn(List.of(new TravellerModel(), new TravellerModel()));

        assertThat(travellerService.getAllTravellers()).hasSize(2);
        verify(travellerRepository,times(1)).findAll();
        verifyNoMoreInteractions(travellerRepository);
    }
    @Test
    void should_delete_one_traveller(){
        doNothing().when(travellerRepository).deleteById(anyString());

        travellerService.deleteTraveller(anyString());

        verify(travellerRepository,times(1)).deleteById(anyString());
        verifyNoMoreInteractions(travellerRepository);

    }
}
