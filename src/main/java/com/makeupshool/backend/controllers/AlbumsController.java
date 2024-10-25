package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.AlbumDTO;
import com.makeupshool.backend.services.implementations.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/albums")
@RequiredArgsConstructor
public class AlbumsController {

    @Autowired
    private AlbumService service;

    @GetMapping
    public List<AlbumDTO> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AlbumDTO getById(@PathVariable Short id) {
        return service.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AlbumDTO create(@RequestBody AlbumDTO newAlbum) {
        return service.create(newAlbum);
    }

    @PutMapping("/{id}")
    public AlbumDTO updateAlbumById(@PathVariable Short id, @RequestBody AlbumDTO updatedAlbum) {
        return service.updateById(id, updatedAlbum);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Short id) {
        service.deleteById(id);
    }
}
