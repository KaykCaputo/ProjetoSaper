package com.example.sl.dto.User;
import com.example.sl.models.User;

public class UserResponseDTO {
    Long user_id;
    String username;
    String password;
    String email;

    public UserResponseDTO(User user) {
        this.user_id = user.getUser_id();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
    }
}
