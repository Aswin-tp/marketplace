package com.marketplace.rest.webservices.restfulwebservices.marketplace;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
	
	

    @Id
	@GeneratedValue
    private long id;
    
    private String productName;
    private String username;
    private long price;
    private boolean status;
    private String description;
    
    public Product() {
    }
    
	public Product(String productName, long id, String username, long price, boolean status, String description) {
		super();
		this.productName = productName;
		this.id = id;
		this.username = username;
		this.price = price;
		this.status = status;
		this.description = description;
	}

	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Product [productName=" + productName + ", id=" + id + ", username=" + username + ", price=" + price
				+ ", status=" + status + "]";
	}
    
	
    
}
  
  


  

