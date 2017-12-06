package com.example.airport.controllers;

import com.example.airport.models.Airplane;
import com.example.airport.repositories.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
        Airplane airplane = new Airplane("Test");
        return airplaneRepository.findAll();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void addAirPlane(@RequestBody Airplane airplane) {
        airplaneRepository.save(airplane);
    }

}
