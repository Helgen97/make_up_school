package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.CourseDetails;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CourseDetailsDTO {

    private Short id;
    private String title;
    private String courseStart;
    private String coursePrice;
    private String courseLessonsAmount;
    private String courseTeacher;
    private String courseProgramTitle;
    private List<String> courseProgramList;

    public static CourseDetailsDTO of(CourseDetails courseDetails) {
        return new CourseDetailsDTO(
                courseDetails.getId(),
                courseDetails.getTitle(),
                courseDetails.getCourseStart(),
                courseDetails.getCoursePrice(),
                courseDetails.getCourseLessonsAmount(),
                courseDetails.getCourseTeacher(),
                courseDetails.getCourseProgramTitle(),
                courseDetails.getCourseProgramList());
    }

}
