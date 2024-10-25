package com.makeupshool.backend.dto;

import lombok.Data;

@Data
public class ClientDTO {

    private String userName;

    private String phoneNumber;

    @Override
    public String toString() {
        return "Запит на дзвінок\n<b>Користувач:</b> %s\n<b>Номер телефону:</b> %s".formatted(userName, phoneNumber);
    }
}
