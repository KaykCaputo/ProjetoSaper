package com.example.sl.controllers;
import com.example.sl.dto.pacient.PacientRequestDTO;
import com.example.sl.models.Pacient;
import com.example.sl.services.PacientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pacient")
public class PacientController {
    @Autowired
    PacientService pacientService;

    @GetMapping
    public Object getPacients() {
        return pacientService.getAllPacients();
    }

    @GetMapping("/{id}")
    public Object getPacientById(@PathVariable(name = "id") Long id) {
        return pacientService.getPacientById(id);
    }

    @PostMapping
    public Pacient addPacient(@RequestBody PacientRequestDTO pacientRequestDTO) {
        return pacientService.addPacient(pacientRequestDTO);
    }

    @PutMapping("/{id}")
    public Object updatePacient(@PathVariable(name = "id") Long id, @RequestBody PacientRequestDTO pacientRequestDTO) {
        return pacientService.updatePacient(id, pacientRequestDTO);
    }

    @DeleteMapping("/{id}")
    public Object deletePacient(@PathVariable(name = "id") Long id) {
        return pacientService.deletePacient(id);
    }
}
