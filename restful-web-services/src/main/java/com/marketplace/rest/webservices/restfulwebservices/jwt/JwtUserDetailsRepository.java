package com.marketplace.rest.webservices.restfulwebservices.jwt;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marketplace.rest.webservices.restfulwebservices.marketplace.Product;

@Repository
public interface JwtUserDetailsRepository extends JpaRepository<JwtUserDetails, Long> {
	List<JwtUserDetails> findByUsername(String username);
}
