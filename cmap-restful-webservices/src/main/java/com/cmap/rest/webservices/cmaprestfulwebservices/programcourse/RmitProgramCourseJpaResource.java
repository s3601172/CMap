package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cmap.rest.webservices.cmaprestfulwebservices.course.RmitCourses;
import com.cmap.rest.webservices.cmaprestfulwebservices.programcoursebo.RmitProgramCourseBo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RmitProgramCourseJpaResource {
	@Autowired
	private RmitProgramCourseJpaRepository rmitProgramJpaRespository;

	@DeleteMapping("/delete-program-course")
	public void deleteCourse(@RequestBody RmitProgramCourseBo rmitProgramCourseBo) {
		String courseCode = rmitProgramCourseBo.getCourseCode();
		System.out.println(courseCode);
		String programCode = "BP094GEN8";
		int semester = rmitProgramCourseBo.getsemester();
		System.out.println(semester);

		rmitProgramJpaRespository.deleteProgramCourse(semester, courseCode, programCode);
		System.out.println("delete");

	}

	@PutMapping("/update-program-course")
	public void updateCourseSemester(@RequestBody RmitProgramCourseBo rmitProgramCourseBo) {

		String courseCode = rmitProgramCourseBo.getCourseCode();
		System.out.println(courseCode);
		String programCode = "BP094GEN8";
		int semester = rmitProgramCourseBo.getsemester();
		System.out.println(semester);
		rmitProgramJpaRespository.updateCourseSemseter(semester, courseCode, programCode);

	}

	@PostMapping(path = "/add-program-course", consumes = "application/json", produces = "application/json")
	public void addProgramCourse(@RequestBody RmitCourses rmitCourse) {
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		programcourseId.setCourseCode(rmitCourse.getcourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(0);
		rpc.setProgramCourseID(programcourseId);
		rmitProgramJpaRespository.save(rpc);

	}

}
