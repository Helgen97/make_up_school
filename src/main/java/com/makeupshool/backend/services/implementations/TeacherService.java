package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.Teacher;
import com.makeupshool.backend.data.TeacherDetails;
import com.makeupshool.backend.dto.TeacherDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.TeachersRepo;
import com.makeupshool.backend.services.interfaces.PrimaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeacherService implements PrimaryService<Teacher, TeacherDTO, Short> {

    @Autowired
    private TeachersRepo teachersRepo;

    @Override
    public List<TeacherDTO> getAll() {
        return teachersRepo.findAll().stream().map(TeacherDTO::of).collect(Collectors.toList());
    }

    @Override
    public TeacherDTO getById(Short id) {
        return TeacherDTO.of(teachersRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Teacher with id %d not found".formatted(id))
        ));
    }

    @Override
    public TeacherDTO create(TeacherDTO newData) {
        return TeacherDTO.of(teachersRepo.save(Teacher.of(newData)));
    }

    @Override
    public TeacherDTO updateById(Short id, TeacherDTO updatedData) {
        Teacher teacher = teachersRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Teacher with id %d not found".formatted(id))
        );

        teacher.setImageUrl(updatedData.getImageUrl());
        teacher.setUkr(TeacherDetails.of(updatedData.getUkr()));
        teacher.setEn(TeacherDetails.of(updatedData.getEn()));

        return TeacherDTO.of(teachersRepo.save(teacher));
    }

    @Override
    public void deleteById(Short id) {
        teachersRepo.deleteById(id);
    }
}
