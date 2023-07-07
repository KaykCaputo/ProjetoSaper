package com.example.sl.dto.pacient;
import com.example.sl.models.Pacient;

import java.util.Date;

public class PacientResponseDTO {
    public Long medicalRecord_id;
    public String cpf;
    public String name;
    public Date birthday;

    public String phone;

    public Boolean medicalRelease;

    public PacientResponseDTO(Pacient pacient) {
        this.medicalRecord_id = pacient.getMedicalRecord_id();
        this.cpf = pacient.getCpf();
        this.name = pacient.getName();
        this.birthday = pacient.getBirthday();
        this.phone = pacient.getPhone();
        this.medicalRelease = pacient.getMedicalRelease();
    }
}
