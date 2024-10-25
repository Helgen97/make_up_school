package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.SchoolDescriptionDTO;
import com.makeupshool.backend.services.implementations.SchoolDescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/school")
@RequiredArgsConstructor
public class SchoolDescriptionController {

    @Autowired
    private SchoolDescriptionService service;

    @GetMapping("/{id}")
    public SchoolDescriptionDTO getById(@PathVariable Byte id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public SchoolDescriptionDTO updateById(@PathVariable Byte id, @RequestBody SchoolDescriptionDTO updatedDescription) {
        return service.updateById(id, updatedDescription);
    }
}
