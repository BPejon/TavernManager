package com.tavernmanager.Tavern.Manager.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "DRINKS")
public class DrinksModel {

    @Id
    private String name;

    @Column(nullable = false)
    @Positive(message = "number has to be greater than zero")
    private int price;

    @Column
    @Positive(message = "number has to be greater than zero")
    private int bottleSize;

    @Column(nullable = false)
    @Positive(message = "number has to be greater than zero")
    private int stockAmount;

    @Column(length = 400)
    //Se eu nap coloco descrição, ele pega um erro no bottleSize que não é maior q zero TODO
    private String description;

    @JsonIgnore
    @ManyToMany(mappedBy = "drinksInventory")
    private Set<TravellerModel> travellers;


    public DrinksModel() {
    }

    public DrinksModel(String name, int price, int bottleSize, int stockAmount) {
        this.name = name;
        this.price = price;
        this.bottleSize = bottleSize;
        this.stockAmount = stockAmount;
        this.description = "No description on this item";
    }

    public DrinksModel(String name, int price, int bottleSize, int stockAmount, String description) {
        this.name = name;
        this.price = price;
        this.bottleSize = bottleSize;
        this.stockAmount = stockAmount;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getBottleSize() {
        return bottleSize;
    }

    public void setBottleSize(int bottleSize) {
        this.bottleSize = bottleSize;
    }

    public int getStockAmount() {
        return stockAmount;
    }

    public void setStockAmount(int stockAmount) {
        this.stockAmount = stockAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int discountStock(int stockChange) {
        if(this.stockAmount- stockChange < 0)
            return -1;
        return this.stockAmount -= stockChange;
    }
}
