package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.CourseDTO;
import com.makeupshool.backend.services.implementations.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CoursesController {

    @Autowired
    private CourseService service;

    @GetMapping
    public List<CourseDTO> getAll() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CourseDTO create(@RequestBody CourseDTO newCourse) {
        return service.create(newCourse);
    }

    @PutMapping("/{id}")
    public CourseDTO updateCourseById(@PathVariable Short id, @RequestBody CourseDTO updatedCourse) {
        return service.updateById(id, updatedCourse);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Short id) {
        service.deleteById(id);
    }
}
