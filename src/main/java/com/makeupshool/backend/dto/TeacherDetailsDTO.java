package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.TeacherDetails;
import lombok.*;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TeacherDetailsDTO {

    private Short id;
    private String teacherName;
    private String teacherOccupation;
    private List<String> teacherFacts;
    private List<String> teacherAchievements;

    public static TeacherDetailsDTO of(TeacherDetails teacherDetails) {
        return new TeacherDetailsDTO(
                teacherDetails.getId(),
                teacherDetails.getTeacherName(),
                teacherDetails.getTeacherOccupation(),
                teacherDetails.getTeacherFacts(),
                teacherDetails.getTeacherAchievements()
        );
    }

}
