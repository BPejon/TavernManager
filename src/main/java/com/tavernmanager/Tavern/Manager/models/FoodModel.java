package com.tavernmanager.Tavern.Manager.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.*;

@Entity
@Table(name = "FOOD")
public class FoodModel {

    @Id
    private String name;

    @Column(nullable = false)
    //@NotEmpty(message = "Price is mandatory") - Not Empty não testa pra int, apenas pra String ou Collections
    @Positive(message = "number has to be greater than zero")
    private int price;


    @Column(nullable = false)
    @Positive(message = "number has to be greater than zero")
    private float mass;

    @Column(nullable = false)
    @Positive(message = "number has to be greater than zero")
    private int stockAmount;

    @Column(length = 400)
    private String description;



    public FoodModel() {
    }

    //Se eu inserir apenas o nome no JSON ele coloca valores default nos outros
    public FoodModel(String name, int price, float mass, int stockAmount) {
        this.name = name;
        this.price = price;
        this.mass = mass;
        this.stockAmount = stockAmount;
        this.description = "No Descrition on this food";
    }

    public FoodModel(String name, int price, float mass, int stockAmount, String description) {
        this.name = name;
        this.price = price;
        this.mass = mass;
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

    public float getMass() {
        return mass;
    }

    public void setMass(float mass) {
        this.mass = mass;
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
