package com.example.sl.services;

import com.example.sl.dto.PacientRequestDTO;
import com.example.sl.dto.PacientResponseDTO;
import com.example.sl.models.Pacient;
import com.example.sl.repository.PacientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PacientService {
    @Autowired
    PacientRepository pacientRepository;

    public Object getAllPacients() {
        return pacientRepository.findAll().stream().map(PacientResponseDTO::new);
    }

    public ResponseEntity<Object> getPacientById(Long id) {
        Optional<Pacient> pacientOptional = pacientRepository.findById(id);

        return pacientOptional.<ResponseEntity<Object>>map(pacient -> ResponseEntity.ok().body(pacient)).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @Transactional
    public Pacient addPacient(PacientRequestDTO pacientRequestDTO) {
        Pacient pacient = new Pacient(pacientRequestDTO);

        pacientRepository.save(pacient);

        return pacient;
    }

    @Transactional
    public ResponseEntity<Object> updatePacient(Long id, PacientRequestDTO pacientRequestDTO) {
        Optional<Pacient> pacientOptional = pacientRepository.findById(id);

        if(pacientOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Pacient pacient = pacientOptional.get();

            pacient.setName(pacientRequestDTO.name);
            pacient.setAge(pacientRequestDTO.age);
            pacient.setPhone(pacientRequestDTO.phone);
            pacient.setMedicalRelease(pacientRequestDTO.medicalRelease);

            pacientRepository.save(pacient);

            return ResponseEntity.ok().body(pacient);
        }
    }

    @Transactional
    public ResponseEntity<Object> deletePacient(Long id) {
        Optional<Pacient> pacientOptional = pacientRepository.findById(id);

        if(pacientOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Pacient pacient = pacientOptional.get();

            pacientRepository.delete(pacient);

            return ResponseEntity.ok().body("Pacient deleted");
        }
    }
}
