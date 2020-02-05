package com.cmap.rest.webservices.cmaprestfulwebservices.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseResource {
	@Autowired
	private CourseDBRepository courseDB;

	@GetMapping("course-list")
	public List<CourseEntity> getCourseList() {
		return courseDB.findAll();
	}
}
