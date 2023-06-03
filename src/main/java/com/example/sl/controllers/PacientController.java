package com.example.sl.controllers;

import com.example.sl.dto.PacientRequestDTO;
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
        return pacientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Object getPacientById(@PathVariable(name = "id") Long id) {
        return pacientService.getClientById(id);
    }

    @PostMapping
    public Pacient addPacient(@RequestBody PacientRequestDTO pacientRequestDTO) {
        return pacientService.addClient(pacientRequestDTO);
    }

    @PutMapping("/{id}")
    public Object updatePacient(@PathVariable(name = "id") Long id, @RequestBody PacientRequestDTO pacientRequestDTO) {
        return pacientService.updateClient(id, pacientRequestDTO);
    }

    @DeleteMapping("/{id}")
    public Object deletePacient(@PathVariable(name = "id") Long id) {
        return pacientService.deleteClient(id);
    }
}
