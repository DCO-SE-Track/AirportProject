package com.example.airport.controllers;

import com.example.airport.models.Airplane;
import com.example.airport.repositories.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Manages the airplane server side data
 * @author doliem
 */

@RestController
@RequestMapping("api/airplane")
public class AirplaneController {

    @Autowired
    private AirplaneRepository airplaneRepository;

    /**
     * Gets all airplanes from the DB
     * @return Iterable list of airplanes
     */
    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Airplane> getAirplanes() {
        return airplaneRepository.findAll();
    }

    /**
     * Adds an airplane to the DB
     * @param airplane the airplane to be added
     */
    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void addAirPlane(@RequestBody Airplane airplane) {
        airplaneRepository.save(airplane);
    }

    /**
     * Deletes an airplane from the DB
     * @param airplane the airplane to be deleted
     */
    @RequestMapping(value = "delete", method = RequestMethod.DELETE)
    public void removeAirplane(@RequestBody Airplane airplane) {
        airplaneRepository.delete(airplane);
    }

    /**
     * Updates an airplaine in the DB
     * @param airplane the airplane to be updated
     */
    @RequestMapping(value = "update/{id}", method = RequestMethod.PUT)
    public void updateGuest(@RequestBody Airplane airplane){
        if(airplane != null){
            Airplane airplaneFromTable = airplaneRepository.findOne(airplane.getId());
            if(airplaneFromTable != null){
                airplaneRepository.save(airplane);
            }
        }
    }

}
