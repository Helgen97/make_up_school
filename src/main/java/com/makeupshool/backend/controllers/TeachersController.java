package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.TeacherDTO;
import com.makeupshool.backend.services.implementations.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
@RequiredArgsConstructor
public class TeachersController {

    @Autowired
    private TeacherService service;

    @GetMapping
    public List<TeacherDTO> getAll() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TeacherDTO create(@RequestBody TeacherDTO newTeacher) {
        return service.create(newTeacher);
    }

    @PutMapping("/{id}")
    public TeacherDTO updateTeacherById(@PathVariable Short id, @RequestBody TeacherDTO updatedTeacher) {
        return service.updateById(id, updatedTeacher);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Short id) {
        service.deleteById(id);
    }
}
