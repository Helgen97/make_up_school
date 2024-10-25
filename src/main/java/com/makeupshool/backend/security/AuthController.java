package com.makeupshool.backend.security;

import com.makeupshool.backend.security.dto.LoginResponseDto;
import com.makeupshool.backend.security.dto.LoginUserDto;
import com.makeupshool.backend.security.services.AuthenticationService;
import com.makeupshool.backend.security.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public LoginResponseDto authenticate(@RequestBody LoginUserDto loginUserDto) {

        UserDetails authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        return LoginResponseDto
                .builder()
                .token(jwtToken)
                .expireIn(jwtService.getExpirationTime())
                .build();
    }


}
