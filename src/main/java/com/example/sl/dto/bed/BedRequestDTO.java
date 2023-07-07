package com.example.sl.dto.bed;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jdk.jfr.BooleanFlag;

public class BedRequestDTO {
    @BooleanFlag
    public Boolean occupied;

    public String type;

    public BedRequestDTO(Boolean occupied, String type){
        this.occupied = occupied;
        this.type = type;
    }
}
