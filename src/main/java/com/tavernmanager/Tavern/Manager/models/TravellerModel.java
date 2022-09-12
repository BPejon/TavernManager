package com.tavernmanager.Tavern.Manager.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
    private int coins;

    public TravellerModel() {
    }

    public TravellerModel(String name, String province, String classType, int level, int coins) {
        this.name = name;
        this.province = province;
        this.classType = classType;
        this.level = level;
        this.coins = coins;
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
    /* Inventory
    private Drinks drinks;
    private Food foods;
    * */

}
