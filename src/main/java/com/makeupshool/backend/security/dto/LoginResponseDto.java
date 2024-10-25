package com.makeupshool.backend.security.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponseDto {

    private String token;

    private long expireIn;

}
