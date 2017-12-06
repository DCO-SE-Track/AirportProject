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

    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Airplane> getAirplanes() {
        return airplaneRepository.findAll();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void addAirPlane(@RequestBody Airplane airplane) {
        airplaneRepository.save(airplane);
    }

    @RequestMapping(value = "delete", method = RequestMethod.DELETE)
    public void removeAirplane(@RequestBody Airplane airplane) {
        airplaneRepository.delete(airplane);
    }

    @RequestMapping(value = "update", method = RequestMethod.PUT)
    public void updateGuest(@RequestBody Airplane airplane){
        if(airplane != null){
            Airplane airplaneFromTable = airplaneRepository.findOne(airplane.getId());
            if(airplaneFromTable != null){
                airplaneFromTable.setAirport("Jemoeder");
                airplaneRepository.save(airplane);
            }
        }
    }

}
