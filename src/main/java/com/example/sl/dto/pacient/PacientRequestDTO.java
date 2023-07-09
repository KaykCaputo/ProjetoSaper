package com.example.sl.dto.pacient;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.*;
import jdk.jfr.BooleanFlag;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class PacientRequestDTO {
    public Long medicalRecord_id;

    public String cpf;


    @Size(min = 5, max = 100, message = "O nome do paciente deve ter entre 5 e 100 caracteres")
    @NotBlank(message = "O nome não pode ser vazio")
    public String name;

    @JsonFormat(pattern="yyyy-MM-dd")
    @NotNull(message = "A data de aniversario não pode ser vazia")
    public Date birthday;

    @Size(min = 8, message = "O numero de telefone deve ter no minimo 8 caracteres")
    @NotBlank(message = "Telefone não pode ser vazio")
    public String phone;

    @BooleanFlag
    @NotNull
    public Boolean medicalRelease;
}
