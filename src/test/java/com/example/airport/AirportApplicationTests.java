package com.example.airport;

import com.example.airport.models.Airplane;
import org.junit.Assert;
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

	@Test
	public void testAirport(){
		airplane = new Airplane();

		String airport = "Test";
		airplane.setAirport(airport);


		Assert.assertEquals(airport, airplane.getAirport());
	}

	@Test
	public void testModel(){
		airplane = new Airplane();

		String model = "Hallo?";
		airplane.setModel(model);


		long id = 1L;
		airplane.setId(id);

		Assert.assertEquals(model, airplane.getModel());
		Assert.assertEquals(id, airplane.getId());
	}

}
