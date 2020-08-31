package com.marketplace.rest.webservices.rest.basic.auth;

import java.net.URI;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.HttpStatus;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	
	@GetMapping(path="/basicauth")
	public AuthenticationBean getProducts(@PathVariable String username) {
		return new AuthenticationBean("You are authenticated");
	}
	

}
