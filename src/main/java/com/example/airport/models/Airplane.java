package com.example.airport.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * Model for Airplane
 * @author doliem
 */
@Entity
public class Airplane {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private Airport airport;
    private String model;
    private double currentFuel;
    private final double MAX_FUEL = 5.0;
    private final double FLIGHT_COST = 2.0;

    public Airplane(Airport airport, String model) {
        this.airport = airport;
        this.model = model;
        this.currentFuel = MAX_FUEL;
    }

    // Empty constructor for Repository
    public Airplane(){

    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getCurrentFuel() {
        return currentFuel;
    }

    public void setCurrentFuel(double currentFuel) {
        this.currentFuel = currentFuel;
    }

    public double getMAX_FUEL() {
        return MAX_FUEL;
    }

    public double getFLIGHT_COST() {
        return FLIGHT_COST;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
