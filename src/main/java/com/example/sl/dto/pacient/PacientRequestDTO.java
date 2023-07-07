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


    @Size(min = 5, max = 100, message = "The patient name must be between 5 and 100 characters")
    @NotBlank(message = "Name can't be blank")
    public String name;

    @JsonFormat(pattern="yyyy-MM-dd")
    @NotNull
    public Date birthday;

    @Size(min = 8, message = "Insert the phone number")
    @NotBlank(message = "Phone can't be blank")
    public String phone;

    @BooleanFlag
    @NotNull
    public Boolean medicalRelease;
}
