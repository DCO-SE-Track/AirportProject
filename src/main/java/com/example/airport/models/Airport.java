package com.example.airport.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Model for airport
 * @author doliem
 */

@Entity
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private Location location;
    @NotNull
    @ManyToOne
    private Airplane airplane;

    public Airport(Location location, Airplane airplane) {
        this.location = location;
        this.airplane = airplane;
    }

    // Empty constructor for Repository
    public Airport(){

    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Airplane getAirplane() {
        return airplane;
    }

    public void setAirplane(Airplane airplane) {
        this.airplane = airplane;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
