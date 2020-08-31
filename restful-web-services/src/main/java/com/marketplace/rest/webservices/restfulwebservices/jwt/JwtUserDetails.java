package com.marketplace.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class JwtUserDetails implements UserDetails {

  private static final long serialVersionUID = 5155720064139820502L;

  @Id
  @GeneratedValue
  private Long id;
  
  private String username;
  private String password;
  private String firstName;
  private String lastName;
  private String phone;
  private String email;
  
 // private final Collection<? extends GrantedAuthority> authorities;

  public JwtUserDetails() {
		
	}

  
  public JwtUserDetails(Long id, String username, String password, String firstName, String lastName,  String phone, String email) {
	  //super();
    this.id = id;
    this.username = username;
    this.password = password;
    this.username = firstName;
    this.password = lastName;
    this.username = phone;
    this.password = email;

    //List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
    //authorities.add(new SimpleGrantedAuthority(role));

    //this.authorities = authorities;
  }
  





public String getPhone() {
	return phone;
}


public void setPhone(String phone) {
	this.phone = phone;
}


public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}


public String getFirstName() {
	return firstName;
}


public void setFirstName(String firstName) {
	this.firstName = firstName;
}


public String getLastName() {
	return lastName;
}


public void setLastName(String lastName) {
	this.lastName = lastName;
}


@JsonIgnore
  public Long getId() {
    return id;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

 
  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
	  List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
	    authorities.add(new SimpleGrantedAuthority("ROLE_USER_2"));


    return authorities;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }


public void setPassword(String password) {
	this.password = password;
}

}


