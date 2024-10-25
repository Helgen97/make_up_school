package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.CourseDetailsDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Course_Details")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class CourseDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column
    private String title;

    @Column
    private String courseStart;

    @Column
    private String coursePrice;

    @Column
    private String courseLessonsAmount;

    @Column
    private String courseTeacher;

    @Column
    private String courseProgramTitle;

    @ElementCollection
    private List<String> courseProgramList;

    @OneToOne(mappedBy = "ukr")
    private Course courseUkr;

    @OneToOne(mappedBy = "en")
    private Course courseEn;

    private CourseDetails(Short id, String title, String courseStart, String coursePrice, String courseLessonsAmount, String courseTeacher, String courseProgramTitle, List<String> courseProgramList) {
        this.id = id;
        this.title = title;
        this.courseStart = courseStart;
        this.coursePrice = coursePrice;
        this.courseLessonsAmount = courseLessonsAmount;
        this.courseTeacher = courseTeacher;
        this.courseProgramTitle = courseProgramTitle;
        this.courseProgramList = courseProgramList;
    }

    public static CourseDetails of(CourseDetailsDTO dataDTO) {
        return new CourseDetails(
                dataDTO.getId(),
                dataDTO.getTitle(),
                dataDTO.getCourseStart(),
                dataDTO.getCoursePrice(),
                dataDTO.getCourseLessonsAmount(),
                dataDTO.getCourseTeacher(),
                dataDTO.getCourseProgramTitle(),
                dataDTO.getCourseProgramList());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseDetails that = (CourseDetails) o;
        return Objects.equals(id, that.id) && Objects.equals(title, that.title) && Objects.equals(courseStart, that.courseStart) && Objects.equals(coursePrice, that.coursePrice) && Objects.equals(courseLessonsAmount, that.courseLessonsAmount) && Objects.equals(courseTeacher, that.courseTeacher) && Objects.equals(courseProgramTitle, that.courseProgramTitle) && Objects.equals(courseProgramList, that.courseProgramList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, courseStart, coursePrice, courseLessonsAmount, courseTeacher, courseProgramTitle, courseProgramList);
    }
}
