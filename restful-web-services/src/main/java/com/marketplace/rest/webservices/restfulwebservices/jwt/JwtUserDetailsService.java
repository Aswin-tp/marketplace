package com.marketplace.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	JwtUserDetailsRepository jwtUserDetailsRepository;
  //static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  
 
//  static {
//    inMemoryUserList.add(new JwtUserDetails(1L, "aswin",
//        "$2a$10$kkH/LSGdGK8ISqiLXk3cFeIjbEzXpjOi8Ia2yZDzFNJhIAMGCcjvm"));
//    inMemoryUserList.add(new JwtUserDetails(1L, "aswintp",
//            "$2a$10$zipmMACkg0UM2UzAaeOhPOMKeipLHYqOvDRY3LiB80M6OGEUWr64O"));
//  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	  
	  List<JwtUserDetails> UserList = jwtUserDetailsRepository.findByUsername(username);
	  
    Optional<JwtUserDetails> findFirst = UserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


