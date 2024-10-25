package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.Teacher;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TeacherDTO {

    private Short id;
    private String imageUrl;
    private TeacherDetailsDTO ukr;
    private TeacherDetailsDTO en;

    public static TeacherDTO of(Teacher teacher) {
        return new TeacherDTO(
                teacher.getId(),
                teacher.getImageUrl(),
                TeacherDetailsDTO.of(teacher.getUkr()),
                TeacherDetailsDTO.of(teacher.getEn())
        );
    }

}
