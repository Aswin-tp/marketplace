package com.marketplace.rest.webservices.rest.basic.auth;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class AuthenticationBean {

private String message;
	
	public AuthenticationBean(String message) {
		this.message=message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
  
  


  

