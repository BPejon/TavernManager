package com.tavernmanager.Tavern.Manager.models;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
@Table(name = "TRAVELLER")
public class TravellerModel {
    @Id
    @Column(nullable = false, length = 255)
    private String name;
    @Column(length = 100)
    private String province;
    @Column(length = 30)
    private String classType;
    @Column
    private int level;
    @Column(nullable = false)
    @PositiveOrZero(message = "number has to be greater than zero")
    private int coins;

    @ManyToMany
    @JoinTable(name = "drinksInInventory",
                joinColumns = @JoinColumn(name = "drinks_id"),
    inverseJoinColumns = @JoinColumn( name = "traveller_id "))
    private Set<DrinksModel> drinksInventory = new HashSet<>();

    public TravellerModel() {
    }

    public TravellerModel(String name, String province, String classType, int level, int coins) {
        this.name = name;
        this.province = province;
        this.classType = classType;
        this.level = level;
        this.coins = coins;
    }

    public Set<DrinksModel> getDrinksInventory() {
        return drinksInventory;
    }

    public void setDrinksInventory(Set<DrinksModel> drinksInventory) {
        this.drinksInventory = drinksInventory;
    }

    public TravellerModel(String name) {
        this.name = name;
        this.province = "None";
        this.classType = "Deprived";
        this.level = 0;
        this.coins = 0;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getClassType() {
        return classType;
    }

    public void setClassType(String classType) {
        this.classType = classType;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }

    public void addDrinksInInventory(DrinksModel drink) {
        drinksInventory.add(drink);
    }

    public int discountCoins(int price) {
        if(this.coins - price < 0){
            return -1;
        }
        return this.coins -= price;
    }
}
