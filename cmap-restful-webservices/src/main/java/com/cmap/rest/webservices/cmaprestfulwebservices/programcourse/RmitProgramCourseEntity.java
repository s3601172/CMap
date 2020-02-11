package com.cmap.rest.webservices.cmaprestfulwebservices.programcourse;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;



@Entity
@Table(name="rmit_program_course")
public class RmitProgramCourseEntity  {
	
	@EmbeddedId
	private RmitProgramCoursePk programCourseID;


	protected RmitProgramCourseEntity(){
		
	}

	public RmitProgramCourseEntity(RmitProgramCoursePk programCourseID) {
		super();
		this.programCourseID = programCourseID;
		
	}

	public RmitProgramCoursePk getProgramCourseID() {
		return programCourseID;
	}


	public void setProgramCourseID(RmitProgramCoursePk programCourseID) {
		this.programCourseID = programCourseID;
	}
	
	

	
	
	
	
	
	
	
	
}
