package com.CmapProject.Cmap.programcoursebo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.CmapProject.Cmap.course.*;
import com.CmapProject.Cmap.program.*;
import com.CmapProject.Cmap.programcourse.RmitProgramCoursePk;
@Repository
public interface RmitProgramCourseBoJpaRepository extends JpaRepository<RmitProgramCourseBo,RmitProgramCoursePk> {
	
	
	@Query(value="select a.course_code,a.title,a.credits,b.program_code ,b.semester from rmit_courses a "
			+ "join rmit_program_course b on a.course_code=b.course_code "
			+ "where b.program_code=?1" ,nativeQuery = true)
	List<RmitProgramCourseBo> findAllCourseByProgram(String programCode);	
	

	
	
}
