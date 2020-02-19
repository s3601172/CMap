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

import com.cmap.rest.webservices.cmaprestfulwebservices.course.CourseEntity;
import com.cmap.rest.webservices.cmaprestfulwebservices.programcoursebo.ProgramCourseBo;

@RestController
@CrossOrigin(origins = "http://cmap.s3-website-ap-southeast-2.amazonaws.com")
public class ProgramCourseController {
	@Autowired
	private ProgramCourseRepository rmitProgramJpaRespository;

	@DeleteMapping("/delete-program-course/{programCode}/{courseCode}/{semester}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String programCode, @PathVariable String courseCode,
			@PathVariable int semester) {
		ProgramCourseId programCourseId = new ProgramCourseId();
		
		programCourseId.setProgramCode(programCode);
		programCourseId.setCourseCode(courseCode);
		programCourseId.setsemester(semester);
		
		rmitProgramJpaRespository.deleteById(programCourseId);
		System.out.print("delete");
		return ResponseEntity.noContent().build();

	}

	@PutMapping("/update-program-course")
	public void updateCourseSemester(@RequestBody ProgramCourseBo rmitProgramCourseBo) {
		String courseCode = rmitProgramCourseBo.getCourseCode();
		System.out.println(courseCode);
		String programCode = rmitProgramCourseBo.getProgramCode();
		int semester = rmitProgramCourseBo.getsemester();
		System.out.println(semester);
		rmitProgramJpaRespository.updateCourseSemseter(semester, courseCode, programCode);

	}

	@PostMapping(path = "/add-program-course", consumes = "application/json", produces = "application/json")
	public void addProgramCourse(@RequestBody CourseEntity rmitCourse) {
		ProgramCourseId programcourseId = new ProgramCourseId();
		ProgramCourseEntity rpc = new ProgramCourseEntity();
		
		programcourseId.setCourseCode(rmitCourse.getcourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(0);
		
		rpc.setProgramCourseID(programcourseId);
		rmitProgramJpaRespository.save(rpc);

	}

}
