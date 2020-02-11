package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class RmitProgramCoursePk implements Serializable{
	@Column(name = "course_code")
	private String courseCode;
	
	private int semester;
	
	private String programCode;
	
	
	protected RmitProgramCoursePk(){
		
	}


	public RmitProgramCoursePk(String courseCode, int semester, String programCode) {
		super();
		this.courseCode = courseCode;
		this.semester = semester;
		this.programCode = programCode;
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


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((courseCode == null) ? 0 : courseCode.hashCode());
		result = prime * result + ((programCode == null) ? 0 : programCode.hashCode());
		result = prime * result + semester;
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RmitProgramCoursePk other = (RmitProgramCoursePk) obj;
		if (courseCode == null) {
			if (other.courseCode != null)
				return false;
		} else if (!courseCode.equals(other.courseCode))
			return false;
		if (programCode == null) {
			if (other.programCode != null)
				return false;
		} else if (!programCode.equals(other.programCode))
			return false;
		if (semester != other.semester)
			return false;
		return true;
	}
	
	
	
}
