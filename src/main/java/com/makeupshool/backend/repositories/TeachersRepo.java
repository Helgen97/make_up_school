package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeachersRepo extends JpaRepository<Teacher, Short> {
}