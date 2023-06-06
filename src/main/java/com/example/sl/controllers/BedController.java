package com.example.sl.controllers;
import com.example.sl.dto.bed.BedRequestDTO;
import com.example.sl.services.BedService;
import com.example.sl.models.Bed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/bed")
public class BedController{
    @Autowired
    BedService bedService;

    @GetMapping
    public Object getBeds() {
        return bedService.getAllBeds();
    }

    @GetMapping("/{id}")
    public Object getBedById(@PathVariable(name = "id") Long id) {
        return bedService.getBedById(id);
    }

    @PostMapping
    public Bed addBed(@RequestBody BedRequestDTO bedRequestDTO) {
        return bedService.addBed(bedRequestDTO);
    }

    @PutMapping("/{id}")
    public Object updateBed(@PathVariable(name = "id") Long id, @RequestBody BedRequestDTO bedRequestDTO) {
        return bedService.updateBed(id, bedRequestDTO);
    }

    @DeleteMapping("/{id}")
    public Object eleterBed(@PathVariable(name = "id") Long id) {
        return bedService.deleteBed(id);
    }
}

