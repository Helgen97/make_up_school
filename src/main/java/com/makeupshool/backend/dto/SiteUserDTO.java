package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.SiteUser;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SiteUserDTO {

    private String login;

    private String password;

    public static SiteUserDTO of(SiteUser siteUser) {
        return new SiteUserDTO(siteUser.getLogin(), siteUser.getPassword());
    }

}
