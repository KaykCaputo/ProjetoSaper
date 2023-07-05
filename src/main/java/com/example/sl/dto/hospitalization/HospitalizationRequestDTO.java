package com.example.sl.dto.hospitalization;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class HospitalizationRequestDTO {
    public Long medicalRecord_id;
    public Long bed_id;
    @Size(min = 5, max = 50, message = "Insert the fugulin, min is 5 and max 50")
    @NotBlank(message = "Fugulin can't be blank")
    public String fugilin;

    @Size(min = 5, max = 50, message = "Insert the origin, min 5, max 50")
    @NotBlank(message = "Origin can't be blank")
    public String origem;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, fallbackPatterns = { "M/d/yy", "dd.MM.yyyy" })
    @NotNull
    public Date hospitalizationDate;

    @Size(min = 5, max = 60, message = "Insert the permanenceReason, min 5 and max 60")
    @NotBlank(message = "permanenceReason can't be blank")
    public String permanenceReason;

    @Size(min = 5, max = 30, message = "Insert the especialty, min 5 and max 30")
    @NotBlank(message = "specialty can't be blank")
    public String specialty;
}
