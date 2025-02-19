package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.ContactsDTO;
import com.makeupshool.backend.services.implementations.ContactsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactsController {
    @Autowired
    private ContactsService service;

    @GetMapping("/{id}")
    public ContactsDTO getById(@PathVariable Byte id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public ContactsDTO updateAlbumById(@PathVariable Byte id, @RequestBody ContactsDTO updatedContacts) {
        return service.update(id, updatedContacts);
    }
}
