package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.Contacts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactsRepo extends JpaRepository<Contacts, Byte> {
}
