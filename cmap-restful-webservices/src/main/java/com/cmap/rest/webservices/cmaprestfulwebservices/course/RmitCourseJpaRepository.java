package com.cmap.rest.webservices.cmaprestfulwebservices.course;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RmitCourseJpaRepository extends JpaRepository<RmitCourses, String> {
	List<RmitCourses> findByCourseCode(String courseCode);

}
