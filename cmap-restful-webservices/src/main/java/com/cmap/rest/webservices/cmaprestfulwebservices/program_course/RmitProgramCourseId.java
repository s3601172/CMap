package com.CmapProject.Cmap.program_course;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class RmitProgramCourseId implements Serializable{
	private String courseCode;
	
	private int year;
	
	private String programCode;
	
	
	protected RmitProgramCourseId(){
		
	}


	public RmitProgramCourseId(String courseCode, int year, String programCode) {
		super();
		this.courseCode = courseCode;
		this.year = year;
		this.programCode = programCode;
	}


	public String getCourseCode() {
		return courseCode;
	}


	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}


	public int getYear() {
		return year;
	}


	public void setYear(int year) {
		this.year = year;
	}


	public String getProgramCode() {
		return programCode;
	}


	public void setProgramCode(String programCode) {
		this.programCode = programCode;
	}
	
	
	
}
