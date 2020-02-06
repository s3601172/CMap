package com.cmap.rest.webservices.cmaprestfulwebservices.course;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="rmit_courses")
public class CourseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="course_code")
	public String courseCode;
	
	@Column(name = "title")
	public String courseName;
	
	public CourseEntity(){}
	
	public CourseEntity(String courseCode, String courseName) {
		this.courseCode = courseCode;
		this.courseName = courseName;
	}
	
}
