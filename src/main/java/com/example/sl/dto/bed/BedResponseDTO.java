package com.example.sl.dto.bed;

import com.example.sl.models.Bed;

public class BedResponseDTO {
    public Long bed_id;
    public Boolean occupied;
    public String type;

    public BedResponseDTO(Bed bed){
        this.bed_id = bed.getBed_id();
        this.occupied = bed.getOccupied();
        this.type = bed.getType();
    }
}
