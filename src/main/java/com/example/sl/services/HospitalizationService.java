package com.example.sl.services;

import com.example.sl.dto.hospitalization.HospitalizationRequestDTO;
import com.example.sl.dto.hospitalization.HospitalizationResponseDTO;
import com.example.sl.models.Bed;
import com.example.sl.models.Hospitalization;
import com.example.sl.models.Pacient;
import com.example.sl.repository.BedRepository;
import com.example.sl.repository.HospitalizationRepository;
import com.example.sl.repository.PacientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HospitalizationService {
    @Autowired
    HospitalizationRepository hospitalizationRepository;

    @Autowired
    PacientRepository pacientRepository;

    @Autowired
    BedRepository bedRepository;

    public Object getAllHospitalizations() {
        return hospitalizationRepository.findAll().stream().map(HospitalizationResponseDTO::new);
    }

    public ResponseEntity<Object> getHospitalizationById(Long id) {
        Optional<Hospitalization> hospitalizationOptional = hospitalizationRepository.findById(id);

        return hospitalizationOptional.<ResponseEntity<Object>>map(hospitalization -> ResponseEntity.ok().body(hospitalization)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Transactional
    public ResponseEntity<Object> addHospitalization(HospitalizationRequestDTO hospitalizationRequestDTO) {
        Optional<Pacient> pacientOptional = pacientRepository.findById(hospitalizationRequestDTO.medicalRecord_id);
        Optional<Bed> bedOptional = bedRepository.findById(hospitalizationRequestDTO.bed_id);

        if(pacientOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("There is no pacient with the received id");
        }

        if(bedOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("There is no bed with the received id");
        }

        Hospitalization hospitalization = new Hospitalization(hospitalizationRequestDTO);

        hospitalizationRepository.save(hospitalization);

        return ResponseEntity.ok(hospitalization);
    }

    @Transactional
    public ResponseEntity<Object> updateHospitalization(Long id, HospitalizationRequestDTO hospitalizationRequestDTO) {
        Optional<Hospitalization> hospitalizationOptional = hospitalizationRepository.findById(id);

        if(hospitalizationOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Hospitalization hospitalization = hospitalizationOptional.get();

            hospitalization.setHospitalizationDate(hospitalizationRequestDTO.hospitalizationDate);
            hospitalization.setFugilin(hospitalizationRequestDTO.fugilin);
            hospitalization.setOrigem(hospitalizationRequestDTO.origem);
            hospitalization.setSpecialty(hospitalizationRequestDTO.specialty);
            hospitalization.setPermanenceReason(hospitalizationRequestDTO.permanenceReason);

            hospitalizationRepository.save(hospitalization);

            return ResponseEntity.ok().body(hospitalization);
        }
    }

    @Transactional
    public ResponseEntity<Object> deleteHospitalization(Long id) {
        Optional<Hospitalization> hospitalizationOptional = hospitalizationRepository.findById(id);

        if(hospitalizationOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Hospitalization hospitalization = hospitalizationOptional.get();

            hospitalizationRepository.delete(hospitalization);

            return ResponseEntity.ok().body("Hospitalization deleted");
        }
    }
}
