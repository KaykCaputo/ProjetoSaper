package com.example.sl.services;

import com.example.sl.dto.User.UserRequestDTO;
import com.example.sl.dto.User.UserResponseDTO;
import com.example.sl.models.User;
import com.example.sl.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Object getAllByName(String name){
        if(name.equals("")) {
            return userRepository.findAll().stream().map((UserResponseDTO::new));
        }else{
            return userRepository.findAllByNameContaining(name).stream().map((UserResponseDTO::new));
        }
    }

    @Transactional
    public Object save(UserRequestDTO userRequestDTO){
        User user = new User(userRequestDTO);

        user = userRepository.save(user);

        return new UserResponseDTO(user);
    }

    public ResponseEntity<Object> findById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);

        return userOptional.<ResponseEntity<Object>>map(user -> ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(user))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found"));
    }

    @Transactional
    public Object update(Long id, UserRequestDTO userRequestDTO) {
        Optional<User> userOptional = userRepository.findById(id);

        if(userOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }else{
            User user= userOptional.get();

            if(userRequestDTO.password!=null) {
                user.setPassword(userRequestDTO.password);
            }

            if(userRequestDTO.username!=null) {
                user.setUsername(userRequestDTO.username);
            }

            return ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(userRepository.save(user)));
        }
    }

    @Transactional
    public ResponseEntity<Object> delete(Long id) {
        Optional<User> userOptional = userRepository.findById(id);

        userRepository.delete(userOptional.get());
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
