package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RmitProgramCourseJpaRepository extends JpaRepository<RmitProgramCourseEntity,RmitProgramCoursePk> {
}
