package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingsRepo extends JpaRepository<Settings, Byte> {
}
