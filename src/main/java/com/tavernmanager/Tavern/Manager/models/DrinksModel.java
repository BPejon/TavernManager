package com.tavernmanager.Tavern.Manager.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DRINKS")
public class DrinksModel {

    @Id
    private String name;
    @Column(nullable = false)
    private int price;
    @Column
    private int bottleSize;
    @Column(nullable = false)
    private int stockAmount;
    @Column(length = 400)
    private String description;

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
}
