package com.example.sl.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class hospitalization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long hospitalization_id;
    Long bed_id;
    Long medicalRecord_id;
    String fugilin;
    String origem;
    Date hospitalizationDate;
    String permanenceReason;
    String specialty;

    public hospitalization() {
    }

    public hospitalization(Long hospitalization_id,
                           Long bed_id, Long medicalRecord_id, String fugilin,
                           String origem, Date hospitalizationDate,
                           String permanenceReason, String specialty) {
        this.hospitalization_id = hospitalization_id;
        this.bed_id = bed_id;
        this.medicalRecord_id = medicalRecord_id;
        this.fugilin = fugilin;
        this.origem = origem;
        this.hospitalizationDate = hospitalizationDate;
        this.permanenceReason = permanenceReason;
        this.specialty = specialty;
    }

    public String getFugilin() {
        return fugilin;
    }

    public void setFugilin(String fugilin) {
        this.fugilin = fugilin;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public Date getHospitalizationDate() {
        return hospitalizationDate;
    }

    public void setHospitalizationDate(Date hospitalizationDate) {
        this.hospitalizationDate = hospitalizationDate;
    }

    public String getPermanenceReason() {
        return permanenceReason;
    }

    public void setPermanenceReason(String permanenceReason) {
        this.permanenceReason = permanenceReason;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public Long getHospitalization_id() {
        return hospitalization_id;
    }

    public Long getBed_id() {
        return bed_id;
    }

    public Long getMedicalRecord_id() {
        return medicalRecord_id;
    }
}
