package com.tavernmanager.Tavern.Manager;


import com.tavernmanager.Tavern.Manager.models.DrinksModel;
import com.tavernmanager.Tavern.Manager.repositories.DrinksRepository;
import com.tavernmanager.Tavern.Manager.services.DrinksService;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.internal.stubbing.answers.DoesNothing;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatNullPointerException;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class DrinkTest {

    @Mock
    private DrinksRepository drinksRepository;

    @InjectMocks
    private DrinksService drinksService;

    @Test
    void testSaveDrink(){
        final var expectedDrink = DrinksModel.builder().name("Milk").price(2)
                .bottleSize(500).stockAmount(15).description("Fresh Milk").build();
        when(drinksRepository.save(any(DrinksModel.class))).thenReturn(expectedDrink);

        final var actual  = drinksService.insertDrink(new DrinksModel());

        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedDrink);
        verify(drinksRepository,times(1)).save(any(DrinksModel.class));
        verifyNoMoreInteractions(drinksRepository);
    }

    @Test
    void testGetDrink(){
        final var expectedDrink = Optional.of(DrinksModel.builder().build());
        when(drinksRepository.findById(anyString())).thenReturn(expectedDrink);

        final var actual = drinksService.getDrink(anyString());

        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedDrink);
        verify(drinksRepository,times(1)).findById(anyString());
        verifyNoMoreInteractions(drinksRepository);
    }

    @Test
    void testGetAllDrinks(){
        when(drinksRepository.findAll()).thenReturn(List.of(new DrinksModel(), new DrinksModel()));


        assertThat(drinksService.getAllDrinks()).hasSize(2);
        verify(drinksRepository,times(1)).findAll();
        verifyNoMoreInteractions(drinksRepository);
    }

    @Test
    void testeDeleteDrink(){
        doNothing().when(drinksRepository).deleteById(anyString());

        drinksService.delete(anyString());

        verify(drinksRepository,times(1)).deleteById(anyString());
        verifyNoMoreInteractions(drinksRepository);
    }
}
