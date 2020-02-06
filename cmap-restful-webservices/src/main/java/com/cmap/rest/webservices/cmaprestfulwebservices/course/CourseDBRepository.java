package com.cmap.rest.webservices.cmaprestfulwebservices.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDBRepository extends JpaRepository<CourseEntity, String>{
}