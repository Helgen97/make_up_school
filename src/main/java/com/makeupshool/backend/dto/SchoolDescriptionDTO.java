package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.SchoolDescription;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SchoolDescriptionDTO {

    private Byte id;
    private List<String> ukr;
    private List<String> en;

    public static SchoolDescriptionDTO of(SchoolDescription schoolDescription) {
        return new SchoolDescriptionDTO(schoolDescription.getId(), schoolDescription.getUkr(), schoolDescription.getEn());
    }

}
