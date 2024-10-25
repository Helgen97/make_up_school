package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.MainDescriptionDTO;
import com.makeupshool.backend.services.implementations.MainDescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/main")
@RequiredArgsConstructor
public class MainDescriptionController {

    @Autowired
    private MainDescriptionService service;

    @GetMapping("/{id}")
    public MainDescriptionDTO getById(@PathVariable Short id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public MainDescriptionDTO updateById(@PathVariable Short id, @RequestBody MainDescriptionDTO updatedDescription) {
        return service.updateById(id, updatedDescription);
    }

}
