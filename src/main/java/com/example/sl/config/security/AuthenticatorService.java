package com.example.sl.config.security;

import com.example.sl.models.User;
import com.example.sl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticatorService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //Optional<User> UserOptional = UserRepository.findByLogin(username);
        Optional<User> UserOptional;
        UserOptional = UserRepository.findByLogin(username);

        if(UserOptional.isEmpty()){
            throw new UsernameNotFoundException("User not found");
        }else{
            return (UserDetails) UserOptional.get();
        }
    }
}
