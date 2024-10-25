package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.TeacherDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Entity
@Table(name = "Teachers")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column(length = 500)
    private String imageUrl;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teacher_ukr_id", referencedColumnName = "id")
    private TeacherDetails ukr;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teacher_en_id", referencedColumnName = "id")
    private TeacherDetails en;

    private Teacher(Short id, String imageUrl, TeacherDetails ukr, TeacherDetails en) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.ukr = ukr;
        this.en = en;
    }

    public static Teacher of(TeacherDTO dataDTO) {
        return new Teacher(
                dataDTO.getId(),
                dataDTO.getImageUrl(),
                TeacherDetails.of(dataDTO.getUkr()),
                TeacherDetails.of(dataDTO.getEn())
        );
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return Objects.equals(getId(), teacher.getId()) && Objects.equals(getImageUrl(), teacher.getImageUrl()) && Objects.equals(getUkr(), teacher.getUkr()) && Objects.equals(getEn(), teacher.getEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getImageUrl(), getUkr(), getEn());
    }
}
