package com.example.sl.services;

import com.example.sl.dto.user.UserRequestDTO;
import com.example.sl.dto.user.UserResponseDTO;
import com.example.sl.models.Users;
import com.example.sl.repository.UsersRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;

    public Object getAllByName(String name){
        if(name.equals("")) {
            return usersRepository.findAll().stream().map((UserResponseDTO::new));
        }else{
            return usersRepository.findAllByUsernameContaining(name).stream().map((UserResponseDTO::new));
        }
    }

    @Transactional
    public Object save(UserRequestDTO userRequestDTO){
        Users users = new Users(userRequestDTO);

        users = usersRepository.save(users);

        return new UserResponseDTO(users);
    }

    public ResponseEntity<Object> findById(Long id) {
        Optional<Users> userOptional = usersRepository.findById(id);

        return userOptional.<ResponseEntity<Object>>map(users -> ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(users))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found"));
    }

    @Transactional
    public Object update(Long id, UserRequestDTO userRequestDTO) {
        Optional<Users> userOptional = usersRepository.findById(id);

        if(userOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }else{
            Users users = userOptional.get();

            if(userRequestDTO.password != null) {
                users.setPassword(userRequestDTO.password);
            }

            if(userRequestDTO.username != null) {
                users.setUsername(userRequestDTO.username);
            }

            return ResponseEntity.status(HttpStatus.OK).body(new UserResponseDTO(usersRepository.save(users)));
        }
    }

    @Transactional
    public ResponseEntity<Object> delete(Long id) {
        Optional<Users> userOptional = usersRepository.findById(id);

        usersRepository.delete(userOptional.get());
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
