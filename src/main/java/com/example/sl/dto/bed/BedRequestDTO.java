package com.example.sl.dto.bed;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jdk.jfr.BooleanFlag;

public class BedRequestDTO {
    @BooleanFlag
    @NotNull
    public Boolean occupied;

    @Size(max = 30, message = "Insert the type of bed, max 30 characters")
    @NotBlank(message = "Type can't be blank")
    public String type;

    public BedRequestDTO(){
    }

    public BedRequestDTO(Boolean occupied, String type){
        this.occupied = occupied;
        this.type = type;
    }
}
