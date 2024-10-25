package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.Settings;
import com.makeupshool.backend.dto.SettingsDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.SettingsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SettingsService {

    @Autowired
    private SettingsRepo repo;

    public SettingsDTO getById(Byte id) {
        return SettingsDTO.of(repo.findById(id).orElseThrow(
                () -> new NotFoundException("Settings with id %d not found".formatted(id))
        ));
    }

    public SettingsDTO updateById(Byte id, SettingsDTO updatedSettings) {
        Settings settings = repo.findById(id).orElseThrow(
                () -> new NotFoundException("Settings with id %d not found".formatted(id))
        );

        settings.setBotToken(updatedSettings.getBotToken());
        settings.setChatId(updatedSettings.getChatId());

        return SettingsDTO.of(repo.save(settings));
    }
}
