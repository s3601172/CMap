package com.CmapProject.Cmap.coursetopic;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CourseTopicEntity {
	@Id
	@Column(name="course_code")
	public String courseCode;
	
	@Column(name="topic_code")
	public String topicCode;

	public CourseTopicEntity(){
	}
	
	public CourseTopicEntity(String courseCode, String topicCode) {
		this.courseCode = courseCode;
		this.topicCode = topicCode;
	}
	
	
	
	
	

}
