package com.example.sl.models;

import com.example.sl.dto.bed.BedRequestDTO;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Bed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long bed_id;
    Boolean occupied;
    String type;

    @OneToMany(mappedBy = "_bed")
    private List<Hospitalization> hospitalizationList;

    public Bed() {
    }

    public Bed(Long bed_id, Boolean occupied, String type) {
        this.bed_id = bed_id;
        this.occupied = occupied;
        this.type = type;
    }

    public Bed(BedRequestDTO bedRequestDTO) {
        this.occupied = bedRequestDTO.occupied;
        this.type = bedRequestDTO.type;
    }

    public Boolean getOccupied() {
        return occupied;
    }

    public void setOccupied(Boolean occupied) {
        this.occupied = occupied;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getBed_id() {
        return bed_id;
    }
}
