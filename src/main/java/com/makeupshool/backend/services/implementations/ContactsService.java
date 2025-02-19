package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.Contacts;
import com.makeupshool.backend.dto.ContactsDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.ContactsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactsService {

    @Autowired
    private ContactsRepo repository;

    public ContactsDTO getById(byte id) {
        return ContactsDTO.of(repository.findById(id).orElseThrow(() -> new NotFoundException("Contacts with id %s not found".formatted(id))));
    }

    public ContactsDTO update(byte id, ContactsDTO updatedContacts) {
        Contacts oldContacts = repository.findById(id).orElseThrow(() -> new NotFoundException("Contacts with id %s not found".formatted(id)));

        oldContacts.setAddressEn(updatedContacts.getAddressEn());
        oldContacts.setAddressUa(updatedContacts.getAddressUa());
        oldContacts.setWorkingHoursEn(updatedContacts.getWorkingHoursEn());
        oldContacts.setWorkingHoursUA(updatedContacts.getWorkingHoursUA());
        oldContacts.setInstagram(updatedContacts.getInstagram());
        oldContacts.setPhone(updatedContacts.getPhone());

        return ContactsDTO.of(repository.save(oldContacts));
    }
}
