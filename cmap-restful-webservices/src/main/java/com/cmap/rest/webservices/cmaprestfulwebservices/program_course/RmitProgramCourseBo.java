package com.CmapProject.Cmap.program_course;


import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;


import javax.persistence.SecondaryTable;
import javax.persistence.Table;



@Entity
@Table(name="rmit_program_course")
@SecondaryTable(name = "rmit_courses")
public class RmitProgramCourseBo  {
	
	@EmbeddedId
	private RmitProgramCourseId programCourseID;


	@Column(name = "title", table = "rmit_courses")
	private String title;
	 
	
	protected RmitProgramCourseBo(){
		
	}


	public RmitProgramCourseBo(RmitProgramCourseId programCourseID, String title) {
		super();
		this.programCourseID = programCourseID;
		this.title = title;
	}


	public RmitProgramCourseId getProgramCourseID() {
		return programCourseID;
	}


	public void setProgramCourseID(RmitProgramCourseId programCourseID) {
		this.programCourseID = programCourseID;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}

	
	
	

	
	
	
	
	
	
	
	
}
