package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.Settings;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SettingsDTO {

    private Byte id;
    private String botToken;
    private String chatId;

    public static SettingsDTO of(Settings data) {
        return new SettingsDTO(data.getId(), data.getBotToken(), data.getChatId());
    }

}
