package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.Course;
import com.makeupshool.backend.data.CourseDetails;
import com.makeupshool.backend.dto.CourseDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.CoursesRepo;
import com.makeupshool.backend.services.interfaces.PrimaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService implements PrimaryService<Course, CourseDTO, Short> {

    @Autowired
    private CoursesRepo coursesRepo;

    @Override
    public List<CourseDTO> getAll() {
        return coursesRepo.findAll().stream().map(CourseDTO::of).collect(Collectors.toList());
    }

    @Override
    public CourseDTO getById(Short id) {
        return CourseDTO.of(coursesRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Course with id %d not found".formatted(id))
        ));
    }

    @Override
    public CourseDTO create(CourseDTO newData) {
        return CourseDTO.of(coursesRepo.save(Course.of(newData)));
    }

    @Override
    public CourseDTO updateById(Short id, CourseDTO updatedData) {
        Course course = coursesRepo.findById(id).orElseThrow(
                () -> new NotFoundException(("Course with id %d not found").formatted(id))
        );

        course.setImageUrl(updatedData.getImageUrl());
        course.setUkr(CourseDetails.of(updatedData.getUkr()));
        course.setEn(CourseDetails.of(updatedData.getEn()));

        return CourseDTO.of(coursesRepo.save(course));
    }

    @Override
    public void deleteById(Short id) {
        coursesRepo.deleteById(id);
    }
}
