package com.example.sl.services;

import com.example.sl.dto.bed.BedRequestDTO;
import com.example.sl.dto.bed.BedResponseDTO;
import com.example.sl.models.Bed;
import com.example.sl.repository.BedRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BedService {
    @Autowired
    BedRepository bedRepository;

    public Object getAllBeds() {
        return bedRepository.findAll().stream().map(BedResponseDTO::new);
    }

    public ResponseEntity<Object> getBedById(Long id) {
        Optional<Bed> bedOptional = bedRepository.findById(id);

        return bedOptional.<ResponseEntity<Object>>map(bed -> ResponseEntity.ok().body(bed)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Transactional
    public Bed addBed(BedRequestDTO bedRequestDTO) {
        Bed bed = new Bed(bedRequestDTO);

        bedRepository.save(bed);

        return bed;
    }

    @Transactional
    public ResponseEntity<Object> updateBed(Long id, BedRequestDTO bedRequestDTO) {
        Optional<Bed> bedOptional = bedRepository.findById(id);

        if(bedOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Bed bed = bedOptional.get();

            bed.setOccupied(bedRequestDTO.occupied);
            bed.setType(bedRequestDTO.type);

            bedRepository.save(bed);

            return ResponseEntity.ok().body(bed);
        }
    }

    @Transactional
    public ResponseEntity<Object> deleteBed(Long id) {
        Optional<Bed> bedOptional = bedRepository.findById(id);

        if(bedOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            Bed bed = bedOptional.get();

            bedRepository.delete(bed);

            return ResponseEntity.ok().body("Bed deleted");
        }
    }
}
