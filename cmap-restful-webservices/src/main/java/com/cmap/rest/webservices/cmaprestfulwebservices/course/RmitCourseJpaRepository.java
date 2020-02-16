package com.cmap.rest.webservices.cmaprestfulwebservices.course;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RmitCourseJpaRepository extends JpaRepository<RmitCourses,String> {
	List<RmitCourses> findByCourseCode(String courseCode);
	

	@Query(value="select * from cmap.rmit_courses "
			+ "where course_code not in "
			+ "(select course_code "
			+ "from cmap.rmit_program_course"
			+ " where program_code=?1)" ,nativeQuery = true)
	List<RmitCourses> findAllCourseNotInProgram(String programCode);	
}
