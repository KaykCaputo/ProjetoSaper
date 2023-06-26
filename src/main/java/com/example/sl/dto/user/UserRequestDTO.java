package com.example.sl.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class UserRequestDTO {
    Long user_id;
    @Size(min = 5, max = 50, message = "The username must be between 5 and 50 characters")
    @NotBlank(message = "username can't be blank")
    public String username;

    @Size(min = 3, max = 10, message = "Password must be between 3 and 10 characters")
    @NotBlank(message = "Password can't be blank")
    public String password;

    @NotBlank
    public  String repeated_password;

    @Email(message = "Email to login")
    @NotBlank(message = "Login can't be blank")
    public String login;

    @Email
    public  String email;

    public UserRequestDTO(){}

    public UserRequestDTO(String username, String password, String repeated_password, String login, String email) {
        this.username = username;
        this.password = password;
        this.repeated_password = repeated_password;
        this.login = login;
        this.email = email;
    }
}
