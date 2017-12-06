package com.example.airport.controllers;

import com.example.airport.repositories.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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

}
