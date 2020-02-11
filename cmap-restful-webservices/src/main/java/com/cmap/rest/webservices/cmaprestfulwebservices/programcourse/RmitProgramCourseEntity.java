package com.CmapProject.Cmap.programcourse;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SecondaryTable;
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
