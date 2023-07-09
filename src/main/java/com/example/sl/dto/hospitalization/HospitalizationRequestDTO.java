package com.example.sl.dto.hospitalization;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class HospitalizationRequestDTO {
    public Long medicalRecord_id;
    public Long bed_id;
    @Size(min = 5, max = 50, message = "O fugulin deve ter entre 5 e 50 caracteres")
    @NotBlank(message = "Fugulin não pode ser vazio")
    public String fugilin;

    @Size(min = 3, max = 50, message = "A origem deve ter entre 3 e 50 caracteres")
    @NotBlank(message = "Origem não pode ser vazio")
    public String origem;

    @JsonFormat(pattern="yyyy-MM-dd")
    @NotNull
    public Date hospitalizationDate;

    @Size(min = 5, max = 60, message = "O motivo de permanencia deve ter entre 5 e 60 caracteres")
    @NotBlank(message = "Motivo de permanencia não pode ser vazio")
    public String permanenceReason;

    @Size(min = 4, max = 30, message = "A especialidade deve ter entre 4 e 30 caracteres")
    @NotBlank(message = "Especialidade não pode ser vazia")
    public String specialty;
}
