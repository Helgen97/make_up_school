package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.MainDescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainDescriptionRepo extends JpaRepository<MainDescription, Short> {
}
