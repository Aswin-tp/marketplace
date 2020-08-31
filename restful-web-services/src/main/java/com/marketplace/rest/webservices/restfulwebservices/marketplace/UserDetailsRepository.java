package com.marketplace.rest.webservices.restfulwebservices.marketplace;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetail, String> {
	List<UserDetail> findByUsername(String username);
}
