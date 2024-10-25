package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.SiteUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SiteUserRepo extends JpaRepository<SiteUser, Byte> {
    Optional<SiteUser> getByLogin(String login);
}
