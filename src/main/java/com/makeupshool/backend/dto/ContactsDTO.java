package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.Contacts;
import lombok.*;

@Data
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ContactsDTO {

    private Byte id;
    private String phone;
    private String workingHoursEn;
    private String workingHoursUA;
    private String addressEn;
    private String addressUa;
    private String instagram;

    public static ContactsDTO of(Contacts contacts) {
        return new ContactsDTO(
                contacts.getId(),
                contacts.getPhone(),
                contacts.getWorkingHoursEn(),
                contacts.getWorkingHoursUA(),
                contacts.getAddressEn(),
                contacts.getAddressUa(),
                contacts.getInstagram());
    }
}