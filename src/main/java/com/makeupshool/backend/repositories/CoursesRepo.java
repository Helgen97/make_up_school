package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursesRepo extends JpaRepository<Course, Short> {
}