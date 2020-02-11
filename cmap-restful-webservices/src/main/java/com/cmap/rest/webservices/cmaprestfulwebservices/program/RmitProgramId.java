package com.CmapProject.Cmap.program;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class RmitProgramId implements Serializable{
	private String code;
	private int year;
	
	protected RmitProgramId(){
		
	}
	public RmitProgramId(String code, int year) {
		super();
		this.code = code;
		this.year = year;
	}
	
	public String getCode() {
		return code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	public int getYear() {
		return year;
	}
	
	public void setYear(int year) {
		this.year = year;
	}

	
}
