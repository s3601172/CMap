package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.CmapProject.Cmap.course.RmitCourses;
import com.CmapProject.Cmap.programcoursebo.RmitProgramCourseBo;



@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RmitProgramCourseJpaResource {
	@Autowired
	private RmitProgramCourseJpaRepository rmitProgramJpaRespository;
	
		
	
	   
	
	@DeleteMapping("/delete-program-course/{programCode}/{courseCode}/{semester}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String programCode,@PathVariable String courseCode,@PathVariable int semester ){
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		programcourseId.setProgramCode(programCode);
		programcourseId.setCourseCode(courseCode);
		programcourseId.setsemester(semester);
		System.out.println(courseCode);
		
		
		System.out.println(semester);		
		
		//rmitProgramJpaRespository.deleteProgramCourse(semester,courseCode , programCode);
		rmitProgramJpaRespository.deleteById(programcourseId);
		System.out.print("delete");
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/update-program-course")
	public void updateCourseSemester(@RequestBody RmitProgramCourseBo rmitProgramCourseBo){
		
	
		String courseCode = rmitProgramCourseBo.getCourseCode();
		System.out.println(courseCode);
		String programCode= "BP094GEN8";
		int semester=rmitProgramCourseBo.getsemester();
		System.out.println(semester);
		rmitProgramJpaRespository.updateCourseSemseter(semester, courseCode, programCode);
		
	}
	
	@PostMapping(path="/add-program-course", consumes = "application/json", produces = "application/json")
	public  void addProgramCourse(@RequestBody RmitCourses rmitCourse) {
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		//System.out.println(rmitCourse.getcourseCode());
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		programcourseId.setCourseCode(rmitCourse.getcourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(0);
		//RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		rpc.setProgramCourseID(programcourseId);
		//System.out.println(rpc);
		rmitProgramJpaRespository.save(rpc);
		
	}
	
	
	
}
