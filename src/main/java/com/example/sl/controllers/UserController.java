package com.example.sl.controllers;

import com.example.sl.dto.user.UserRequestDTO;
import com.example.sl.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping
    public Object getAllByName(@RequestParam(name = "name", defaultValue = "") String name){
        return userService.getAllByName(name);
    }

    @GetMapping("/{id}")
    public Object getOne(@PathVariable(name = "id") Long id){
        return userService.findById(id);
    }

    @PostMapping
    public Object save(@RequestBody UserRequestDTO clientRequestDTO){

        return userService.save(clientRequestDTO);
    }

    @PutMapping("/{id}")
    public Object update(@PathVariable(name = "id") Long id,
                         @RequestBody UserRequestDTO userRequestDTO){
        return userService.update(id, userRequestDTO);
    }

    @DeleteMapping("/{id}")
    public Object delete(@PathVariable(name = "id") Long id){
        return userService.delete(id);
    }

    @GetMapping("/username")
    public Object getUsername(){
        Object logged = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        String username = "";

        if (logged instanceof User) {
            username = ((User) logged).getUsername();
        }
        return username;
    }
}
