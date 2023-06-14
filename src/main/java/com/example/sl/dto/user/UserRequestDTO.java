package com.example.sl.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class UserRequestDTO {
    Long user_id;
    @Size(min = 5, max = 50, message = "Tamanho do nome deve ser entre 5 e 50")
    @NotBlank(message = "Nome não pode ser em branco")
    public String username;

    @Size(min = 3, max = 10, message = "Password tem tamanho entre 3 e 10")
    @NotBlank(message = "password não pode ser em branco")
    public String password;

    @NotBlank
    public  String repeated_password;

    @Email(message = "login deve ser um email")
    @NotBlank(message = "login não pode ser em branco")
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
