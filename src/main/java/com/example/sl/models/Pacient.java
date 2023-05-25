package com.example.sl.models;

import jakarta.persistence.*;

@Entity
public class Pacient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long medicalRecord_id;
    @Column(unique = true)
    String cpf;
    String name;
    Integer age;
    String phone;
    Boolean medicalRelease;

    public Pacient() {
    }

    public Pacient(Long medicalRecord_id, String cpf, String name, Integer age, String phone, Boolean medicalRelease) {
        this.medicalRecord_id = medicalRecord_id;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.medicalRelease = medicalRelease;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
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
