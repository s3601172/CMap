	package com.cmap.rest.webservices.cmaprestfulwebservices.program;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
@Entity
@Table(name="rmit_program")
public class RmitProgram implements Serializable {
	
	@EmbeddedId
	private RmitProgramId programID;
	private String name;
	private String target;
	
	protected RmitProgram(){
		
	}
	public RmitProgram(RmitProgramId programID, String name, String target) {
		super();
		this.programID = programID;
		this.name = name;
		this.target = target;
	}
	
	public RmitProgramId getProgramID() {
		return programID;
	}
	public void setProgramID(RmitProgramId programID) {
		this.programID = programID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTarget() {
		return target;
	}
	public void setTarget(String target) {
		this.target = target;
	}
	
	
	
	
	
	
}
