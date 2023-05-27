package com.example.sl.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class bed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long bed_id;
    Boolean occupied;
    String type;

    @OneToMany(mappedBy = "_bed")
    private List<hospitalization> hospitalizationList;

    public bed() {
    }

    public bed(Long bed_id, Boolean occupied, String type) {
        this.bed_id = bed_id;
        this.occupied = occupied;
        this.type = type;
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
