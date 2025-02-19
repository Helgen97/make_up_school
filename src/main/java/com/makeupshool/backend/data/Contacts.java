package com.makeupshool.backend.data;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Contacts_Details")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Contacts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Byte id;
    private String phone;
    private String workingHoursEn;
    private String workingHoursUA;
    private String addressEn;
    private String addressUa;
    private String instagram;

}
