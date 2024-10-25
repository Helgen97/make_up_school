package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.CourseDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Entity
@Table(name = "Courses")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column(length = 600)
    private String imageUrl;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_ukr_id", referencedColumnName = "id")
    private CourseDetails ukr;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_en_id", referencedColumnName = "id")
    private CourseDetails en;

    private Course(Short id, String imageUrl, CourseDetails ukr, CourseDetails en) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.ukr = ukr;
        this.en = en;
    }

    public static Course of(CourseDTO dataDTO) {
        return new Course(
                dataDTO.getId(),
                dataDTO.getImageUrl(),
                CourseDetails.of(dataDTO.getUkr()),
                CourseDetails.of(dataDTO.getEn())
        );
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(getId(), course.getId()) && Objects.equals(getImageUrl(), course.getImageUrl()) && Objects.equals(getUkr(), course.getUkr()) && Objects.equals(getEn(), course.getEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getImageUrl(), getUkr(), getEn());
    }
}
