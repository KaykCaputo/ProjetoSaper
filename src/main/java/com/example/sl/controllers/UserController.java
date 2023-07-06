package com.example.sl.controllers;

import com.example.sl.dto.user.UserRequestDTO;
import com.example.sl.dto.user.UserResponseDTO;
import com.example.sl.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping
    public Object save(@RequestBody UserRequestDTO userRequestDTO){

        return userService.save(userRequestDTO);
    }

    @PutMapping("/{id}")
    public Object update(@PathVariable(name = "id") Long id,
                         @RequestBody UserRequestDTO userRequestDTO){
        return userService.update(id, userRequestDTO);
    }

    @GetMapping("/{id}")
    public Object getUserByID(@PathVariable(name = "id") Long id){
        return userService.findById(id);
    }

    @DeleteMapping("/{id}")
    public Object delete(@PathVariable(name = "id") Long id){
        return userService.delete(id);
    }

    @GetMapping("/username/{login}")
    public Object login(@PathVariable(name = "login") String login){
        List<UserResponseDTO> users = userService.getAllByName(login);

        if (users.size() == 0) {
            ResponseEntity.status(404);
            return null;
        }

        return users.get(0);
    }

}
