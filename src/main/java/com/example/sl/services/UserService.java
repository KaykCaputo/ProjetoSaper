package com.example.sl.services;

import com.example.sl.config.security.SecurityConfiguration;
import com.example.sl.dto.user.UserRequestDTO;
import com.example.sl.dto.user.UserResponseDTO;
import com.example.sl.models.Users;
import com.example.sl.repository.UsersRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.sl.config.security.SecurityConfiguration;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;

    public List<UserResponseDTO> getAllByName(String name){
        if(name.equals("")) {
            return usersRepository.findAll().stream().map((UserResponseDTO::new)).toList();
        }else{
            return usersRepository.findAllByUsernameContaining(name).stream().map((UserResponseDTO::new)).toList();
        }
    }

    @Transactional
    public Object save(UserRequestDTO userRequestDTO){
        Users user = new Users(userRequestDTO);
        user.setPassword(passwordEncoder().encode(userRequestDTO.password));
        usersRepository.save(user);
        return user;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public ResponseEntity<Object> findById(Long id) {
        Optional<Users> userOptional = usersRepository.findById(id);

        return userOptional.<ResponseEntity<Object>>map(user -> ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(user))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found"));
    }

    @Transactional
    public Object update(Long id, UserRequestDTO userRequestDTO) {
        Optional<Users> userOptional = usersRepository.findById(id);

        if(userOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }else{
            Users user= userOptional.get();

            if(userRequestDTO.password!=null) {
                user.setPassword(userRequestDTO.password);
            }

            if(userRequestDTO.username!=null) {
                user.setUsername(userRequestDTO.username);
            }

            return ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(usersRepository.save(user)));
        }
    }

    @Transactional
    public ResponseEntity<Object> delete(Long id) {
        Optional<Users> userOptional = usersRepository.findById(id);

        usersRepository.delete(userOptional.get());
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
