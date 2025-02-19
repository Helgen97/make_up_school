package com.makeupshool.backend.controllers;

import com.makeupshool.backend.services.implementations.SiteUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private SiteUserService service;

    @PutMapping("/api/user")
    public void changePassword(@AuthenticationPrincipal UserDetails userDetails, @RequestBody String rawPassword) {
        service.changePassword(userDetails.getUsername(), rawPassword);
    }

}
