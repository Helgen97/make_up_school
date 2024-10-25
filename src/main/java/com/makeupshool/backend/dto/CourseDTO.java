package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.Course;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CourseDTO {

    private Short id;
    private String imageUrl;
    private CourseDetailsDTO ukr;
    private CourseDetailsDTO en;

    public static CourseDTO of(Course course) {
        return new CourseDTO(
                course.getId(),
                course.getImageUrl(),
                CourseDetailsDTO.of(course.getUkr()),
                CourseDetailsDTO.of(course.getEn())
        );
    }
}
