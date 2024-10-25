package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.SchoolDescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolDescriptionRepo extends JpaRepository<SchoolDescription, Byte> {
}