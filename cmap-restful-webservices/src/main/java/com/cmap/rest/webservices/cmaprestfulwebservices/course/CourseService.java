package com.cmap.rest.webservices.cmaprestfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseService {
	private static List<Course> courseList = new ArrayList<Course>();

	static {
		courseList.add(new Course("COSC1076", "Advanced Programming Techniques", 12, 1));
		courseList.add(new Course("COSC1093", "Scripting Language Programming", 12, 3));
		courseList.add(new Course("COSC1076", "Advanced Programming Techniques", 12, 1));
		courseList.add(new Course("COSC110", "Computing Theory", 12, 3));
		courseList.add(new Course("COSC1111", "Data Communication and Net-Centric Computing", 12, 0));
	}

	public List<Course> getCourseList() {
		return courseList;
	}
}