package com.example.airport;

import com.example.airport.models.Airplane;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Tests the airport and airplane models and controllers
 * @author doliem
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class AirportApplicationTests {

	private Airplane airplane;

	/**
	 * Initializes the airplane object for testing
	 */
	@Before
	public void init(){
		airplane = new Airplane();
	}


	/**
	 * Tests the airport value
	 */
	@Test
	public void testAirport(){

		String airport = "Test";
		airplane.setAirport(airport);


		Assert.assertEquals(airport, airplane.getAirport());
	}

	/**
	 * Tests the model value
	 */
	@Test
	public void testModel(){

		String model = "Hallo?";
		airplane.setModel(model);


		long id = 1L;
		airplane.setId(id);

		Assert.assertEquals(model, airplane.getModel());
		Assert.assertEquals(id, airplane.getId());
	}

	/**
	 * Tests the fuel of the airplane
	 */
	@Test
	public void testFuel(){
		double fuel = 5.0;
		airplane.setCurrentFuel(fuel);
		boolean currentFuelMatches = (fuel == airplane.getCurrentFuel());

		Assert.assertTrue(currentFuelMatches);

		double flightCost = 2.0;
		boolean flightCostMatches = (flightCost == airplane.getFLIGHT_COST());

		Assert.assertTrue(flightCostMatches);

		double maxFuel = 5.0;
		boolean maxFuelMatches = (maxFuel == airplane.getMAX_FUEL());

		Assert.assertTrue(maxFuelMatches);
	}

}
