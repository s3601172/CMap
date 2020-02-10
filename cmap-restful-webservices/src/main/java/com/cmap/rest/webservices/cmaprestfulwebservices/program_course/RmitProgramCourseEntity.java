package com.CmapProject.Cmap.program_course;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;


import javax.persistence.SecondaryTable;
import javax.persistence.Table;



@Entity
@Table(name="rmit_program_course")

public class RmitProgramCourseEntity  {
	
	@EmbeddedId
	private RmitProgramCourseId programCourseID;


	
	protected RmitProgramCourseEntity(){
		
	}

	public RmitProgramCourseEntity(RmitProgramCourseId programCourseID) {
		super();
		this.programCourseID = programCourseID;
		
		//this.title = title;
	}

	public RmitProgramCourseId getProgramCourseID() {
		return programCourseID;
	}


	public void setProgramCourseID(RmitProgramCourseId programCourseID) {
		this.programCourseID = programCourseID;
	}
	
	

	
	
	
	
	
	
	
	
}
