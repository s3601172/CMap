package com.cmap.rest.webservices.cmaprestfulwebservices.course;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//import com.CmapProject.Cmap.program_course.RmitProgramCourse;
//import com.CmapProject.Cmap.program_course.RmitProgramCourseId;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RmitCourseJpaResource {
	@Autowired
	private RmitCourseJpaRepository rmitcourseJpaRespository;
	
	@GetMapping("/{courseCode}")
	public List<RmitCourses> getOneCourseTodo(@PathVariable String courseCode){
		return rmitcourseJpaRespository.findByCourseCode(courseCode);
		//return todoService.findAll();
	}
	
	@GetMapping("/allCourse")
	public List<RmitCourses> getAllCourse(){
		return rmitcourseJpaRespository.findAll();
		//return todoService.findAll();
	}
	
	
}
