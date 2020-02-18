package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RmitProgramCourseJpaRepository extends JpaRepository<RmitProgramCourseEntity,RmitProgramCoursePk> {
	
	@Modifying	
	@Transactional
	@Query(value="update rmit_program_course rpc set rpc.semester=?1 where rpc.course_code=?2 and rpc.program_code=?3"
			 ,nativeQuery = true)
	void updateCourseSemseter(int semester,String coursecode,String programCode);	
	
	
/*	@Modifying	
	@Transactional
	@Query(value="delete from rmit_program_course rpc where rpc.semester=?1 and rpc.course_code=?2 and rpc.program_code=?3"
			 ,nativeQuery = true)
	void deleteProgramCourse(int semester,String coursecode,String programCode);	
*/
	
	
}
