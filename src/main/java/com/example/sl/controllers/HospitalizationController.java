package com.example.sl.controllers;
import com.example.sl.dto.hospitalization.HospitalizationRequestDTO;
import com.example.sl.services.HospitalizationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hospitalization")
public class HospitalizationController {
    @Autowired
    HospitalizationService hospitalizationService;

    @GetMapping
    public Object getHospitalizations() {
        return hospitalizationService.getAllHospitalizations();
    }

    @GetMapping("/{id}")
    public Object getHospitalizationById(@PathVariable(name = "id") Long id) {
        return hospitalizationService.getHospitalizationById(id);
    }

    @PostMapping
    public Object addHospitalization(@Valid @RequestBody HospitalizationRequestDTO hospitalizationRequestDTO) {
        return hospitalizationService.addHospitalization(hospitalizationRequestDTO);
    }

    @PutMapping("/{id}")
    public Object updateHospitalization(@PathVariable(name = "id") Long id, @RequestBody HospitalizationRequestDTO hospitalizationRequestDTO) {
        return hospitalizationService.updateHospitalization(id, hospitalizationRequestDTO);
    }

    @DeleteMapping("/{id}")
    public Object deleteHospitalization(@PathVariable(name = "id") Long id) {
        return hospitalizationService.deleteHospitalization(id);
    }
}
