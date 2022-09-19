package com.tavernmanager.Tavern.Manager;

import com.tavernmanager.Tavern.Manager.models.FoodModel;
import com.tavernmanager.Tavern.Manager.repositories.FoodRepository;
import com.tavernmanager.Tavern.Manager.services.FoodService;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class FoodTest {

    //Test de controles tem??
    @Mock
    private FoodRepository foodRepository;

    @InjectMocks
    private FoodService foodService;

    @Test
    void testSaveOneFood(){
        final var expectedFood = FoodModel.builder().name("bread")
                .price(1).mass(35).stockAmount(15).description("normal Bread!").build();
        when(foodRepository.save(any(FoodModel.class))).thenReturn(expectedFood);

        final var actual = foodService.insertFood(new FoodModel());

        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedFood);
        verify(foodRepository,times(1)).save(any(FoodModel.class));
        verifyNoMoreInteractions(foodRepository);
    }


    @Test
    void testGetFood(){
        final var expectedFood = Optional.of(FoodModel.builder().name("bread")
                .price(1).mass(35).stockAmount(15).description("normal Bread!").build());
        when(foodRepository.findById(anyString())).thenReturn(expectedFood);

        final var actual = foodService.getFood(anyString());

        assertThat(actual).usingRecursiveComparison().isEqualTo(expectedFood);
        verify(foodRepository,times(1)).findById(anyString());
        verifyNoMoreInteractions(foodRepository);
    }

    @Test
    void testNotFindFoodThatDoesntExist(){
        when(foodRepository.findById(anyString())).thenReturn(Optional.empty());

        final var actual = foodService.getFood(anyString());

        assertThat(actual).usingRecursiveComparison().isEqualTo(Optional.empty());
        verify(foodRepository,times(1)).findById(anyString());
        verifyNoMoreInteractions(foodRepository);

    }
    @Test
    void testGetAllFood(){
        when(foodRepository.findAll()).thenReturn(List.of(new FoodModel(),new FoodModel(),new FoodModel()));

        assertThat(foodService.getAllFood()).hasSize(3);
        verify(foodRepository,times(1)).findAll();
        verifyNoMoreInteractions(foodRepository);
    }

    @Test
    void testDeleteFood(){
        doNothing().when(foodRepository).deleteById(anyString());

        foodService.delete(anyString());

        verify(foodRepository,times(1)).deleteById(anyString());
        verifyNoMoreInteractions(foodRepository);

    }
}
