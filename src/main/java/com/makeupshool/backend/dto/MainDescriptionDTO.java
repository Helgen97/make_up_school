package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.MainDescription;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class MainDescriptionDTO {

    private Short id;
    private String ukr;
    private String en;

    public static MainDescriptionDTO of(MainDescription mainDescription) {
        return new MainDescriptionDTO(mainDescription.getId(), mainDescription.getUkr(), mainDescription.getEn());
    }
}
