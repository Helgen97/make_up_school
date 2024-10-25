package com.makeupshool.backend.security.services;

import com.makeupshool.backend.dto.SiteUserDTO;
import com.makeupshool.backend.repositories.SiteUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    @Autowired
    private SiteUserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SiteUserDTO user = SiteUserDTO.of(repo.getByLogin(username).orElseThrow(() ->
                new UsernameNotFoundException("User %s not found".formatted(username))
        ));

        return User.builder()
                .username(user.getLogin())
                .password(user.getPassword())
                .authorities("ROLE_ADMIN")
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .build();
    }
}
