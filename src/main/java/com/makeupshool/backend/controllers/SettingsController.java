package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.SettingsDTO;
import com.makeupshool.backend.services.implementations.SettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class SettingsController {

    @Autowired
    private SettingsService service;

    @GetMapping("/{id}")
    public SettingsDTO getById(@PathVariable Byte id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public SettingsDTO updateById(@PathVariable Byte id, @RequestBody SettingsDTO updatedSettings) {
        return service.updateById(id, updatedSettings);
    }
}
