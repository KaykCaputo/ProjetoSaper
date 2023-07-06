package com.example.sl.dto.user;
import com.example.sl.models.Users;

public class UserResponseDTO {
    Long user_id;
    String username;
    String password;
    String email;

    public UserResponseDTO(Users users) {
        this.user_id = users.getUser_id();
        this.username = users.getUsername();
        this.password = users.getPassword();
        this.email = users.getEmail();
    }

    public Long getUser_id() {
        return user_id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
