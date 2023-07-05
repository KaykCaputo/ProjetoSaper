package com.example.sl.dto.pacient;

import jakarta.validation.constraints.*;
import jdk.jfr.BooleanFlag;
import org.hibernate.validator.constraints.UniqueElements;

public class PacientRequestDTO {
    public Long medicalRecord_id;

    public String cpf;


    @Size(min = 5, max = 100, message = "The patient name must be between 5 and 100 characters")
    @NotBlank(message = "Name can't be blank")
    public String name;

    @Min(1)
    @Max(120)
    @NotNull
    public Integer age;

    @Size(min = 8, message = "Insert the phone number")
    @NotBlank(message = "Phone can't be blank")
    public String phone;

    @BooleanFlag
    @NotNull
    public Boolean medicalRelease;
}
