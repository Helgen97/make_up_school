package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.MainDescriptionDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Entity
@Table(name = "Main_Description")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class MainDescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column(length = 500)
    private String ukr;

    @Column(length = 500)
    private String en;

    public static MainDescription of(MainDescriptionDTO dataDto) {
        return new MainDescription(dataDto.getId(), dataDto.getUkr(), dataDto.getEn());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MainDescription that = (MainDescription) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getUkr(), that.getUkr()) && Objects.equals(getEn(), that.getEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUkr(), getEn());
    }
}
