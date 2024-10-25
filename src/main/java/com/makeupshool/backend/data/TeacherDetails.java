package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.TeacherDetailsDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Teacher_Details")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class TeacherDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column
    private String teacherName;

    @Column
    private String teacherOccupation;

    @ElementCollection
    private List<String> teacherFacts;

    @ElementCollection
    private List<String> teacherAchievements;

    @OneToOne(mappedBy = "ukr")
    private Teacher teacherUkr;

    @OneToOne(mappedBy = "en")
    private Teacher teacherEn;

    private TeacherDetails(Short id, String teacherName, String teacherOccupation, List<String> teacherFacts, List<String> teacherAchievements) {
        this.id = id;
        this.teacherName = teacherName;
        this.teacherOccupation = teacherOccupation;
        this.teacherFacts = teacherFacts;
        this.teacherAchievements = teacherAchievements;
    }

    public static TeacherDetails of(TeacherDetailsDTO dataDTO) {
        return new TeacherDetails(
                dataDTO.getId(),
                dataDTO.getTeacherName(),
                dataDTO.getTeacherOccupation(),
                dataDTO.getTeacherFacts(),
                dataDTO.getTeacherAchievements()
        );
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherDetails that = (TeacherDetails) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getTeacherName(), that.getTeacherName()) && Objects.equals(getTeacherOccupation(), that.getTeacherOccupation()) && Objects.equals(getTeacherFacts(), that.getTeacherFacts()) && Objects.equals(getTeacherAchievements(), that.getTeacherAchievements()) && Objects.equals(getTeacherUkr(), that.getTeacherUkr()) && Objects.equals(getTeacherEn(), that.getTeacherEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getTeacherName(), getTeacherOccupation(), getTeacherFacts(), getTeacherAchievements(), getTeacherUkr(), getTeacherEn());
    }
}
