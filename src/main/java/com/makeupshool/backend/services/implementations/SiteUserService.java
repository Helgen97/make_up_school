package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.SiteUser;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.SiteUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SiteUserService {

    @Autowired
    private SiteUserRepo repo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void changePassword(String userName, String rawPassword) {
        SiteUser user = repo.getByLogin(userName).orElseThrow(() ->
                new NotFoundException("User %s not found".formatted(userName))
        );

        String newPassword = passwordEncoder.encode(rawPassword);
        user.setPassword(newPassword);

        repo.save(user);
    }
}
