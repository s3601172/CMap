package com.cmap.rest.webservices.cmaprestfulwebservices.programcoursebo;


import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import com.cmap.rest.webservices.cmaprestfulwebservices.programcourse.RmitProgramCoursePk;

@Entity
@Table(name="rmit_program_course")
@IdClass(RmitProgramCoursePk.class)
@SecondaryTable(name = "rmit_courses")
public class RmitProgramCourseBo  {
	
	//@EmbeddedId
	//private RmitProgramCourseId programCourseID;


	@Id
	@Column(name = "course_code")
	private String courseCode;
	
	@Id
	@Column(name = "semester")
	private int semester;
	
	
	@Id
	@Column(name = "program_code")
	private String programCode;

	@Column(name = "title", table = "rmit_courses")
	private String title;
	 
	
	protected RmitProgramCourseBo(){
		
	}


	public RmitProgramCourseBo(String courseCode, int semester, String programCode, String title) {
		super();
		this.courseCode = courseCode;
		this.semester = semester;
		this.programCode = programCode;
		this.title = title;
	}


	public String getCourseCode() {
		return courseCode;
	}


	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}


	public int getsemester() {
		return semester;
	}


	public void setsemester(int semester) {
		this.semester = semester;
	}


	public String getProgramCode() {
		return programCode;
	}


	public void setProgramCode(String programCode) {
		this.programCode = programCode;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}

	
	

	
	
	
	
	
	
	
	
}