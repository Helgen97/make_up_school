package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.SchoolDescriptionDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "School_Description")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SchoolDescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Byte id;

    @ElementCollection
    private List<String> ukr;

    @ElementCollection
    private List<String> en;

    public static SchoolDescription of(SchoolDescriptionDTO dataDTO) {
        return new SchoolDescription(dataDTO.getId(), dataDTO.getUkr(), dataDTO.getEn());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SchoolDescription that = (SchoolDescription) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getUkr(), that.getUkr()) && Objects.equals(getEn(), that.getEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUkr(), getEn());
    }
}
