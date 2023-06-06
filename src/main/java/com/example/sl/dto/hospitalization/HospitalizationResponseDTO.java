package com.example.sl.dto.hospitalization;
import com.example.sl.models.Hospitalization;

import java.util.Date;

public class HospitalizationResponseDTO {
    public Long hospitalization_id;
    public Long medicalRecord_id;
    public Long bed_id;
    public String fugilin;
    public String origem;
    public Date hospitalizationDate;
    public String permanenceReason;
    public String specialty;

    public HospitalizationResponseDTO(Hospitalization hospitalization) {
        this.hospitalization_id = hospitalization.getHospitalization_id();
        this.medicalRecord_id = hospitalization.getMedicalRecord_id();
        this.bed_id = hospitalization.getBed_id();
        this.fugilin = hospitalization.getFugilin();
        this.origem = hospitalization.getOrigem();
        this.hospitalizationDate = hospitalization.getHospitalizationDate();
        this.permanenceReason = hospitalization.getPermanenceReason();
        this.specialty = hospitalization.getSpecialty();
    }
}
