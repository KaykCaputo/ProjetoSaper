package com.example.sl.models;

import com.example.sl.dto.pacient.PacientRequestDTO;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Pacient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long medicalRecord_id;
    @Column(unique = true)
    String cpf;
    String name;
    Date birthday;
    @Column(unique = true)
    String phone;

    Boolean medicalRelease;
    @OneToMany(mappedBy = "pacient", cascade = CascadeType.ALL)
    private List<Hospitalization> hospitalizationList;


    public Pacient() {
    }

    public Pacient(Long medicalRecord_id, String cpf, String name, Date age, String phone, Boolean medicalRelease) {
        this.medicalRecord_id = medicalRecord_id;
        this.cpf = cpf;
        this.name = name;
        this.birthday = age;
        this.phone = phone;
        this.medicalRelease = medicalRelease;
    }

    public Pacient(PacientRequestDTO pacientRequestDTO) {
        this.cpf = pacientRequestDTO.cpf;
        this.name = pacientRequestDTO.name;
        this.birthday = pacientRequestDTO.birthday;
        this.phone = pacientRequestDTO.phone;
        this.medicalRelease = pacientRequestDTO.medicalRelease;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setAge(Date birthday) {
        this.birthday = birthday;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Boolean getMedicalRelease() {
        return medicalRelease;
    }

    public void setMedicalRelease(Boolean medicalRelease) {
        this.medicalRelease = medicalRelease;
    }

    public Long getMedicalRecord_id() {
        return medicalRecord_id;
    }

    public String getCpf() {
        return cpf;
    }
}
