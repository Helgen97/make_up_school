package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.SettingsDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Entity
@Table(name = "bot_settings")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Byte id;

    @Column(length = 600)
    private String botToken;

    @Column
    private String chatId;

    public static Settings of(SettingsDTO dto) {
        return new Settings(dto.getId(), dto.getBotToken(), dto.getChatId());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Settings settings = (Settings) o;
        return Objects.equals(getId(), settings.getId()) && Objects.equals(getBotToken(), settings.getBotToken()) && Objects.equals(getChatId(), settings.getChatId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBotToken(), getChatId());
    }
}
