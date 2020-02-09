package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="rmit_course_topic")
public class CourseTopicEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "course_topic_code")
	public int courseTopicId;
	
	@Column(name="course_code")
	public String courseCode;
	
	@Column(name="topic_code")
	public String topicCode;

	public CourseTopicEntity() {};	
	
	public CourseTopicEntity(String courseCode, String topicCode) {
		super();
		this.courseCode = courseCode;
		this.topicCode = topicCode;
	}
	

	public int getCourseTopicId() {
		return courseTopicId;
	}

	public void setCourseTopicId(int courseTopicId) {
		this.courseTopicId = courseTopicId;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public String getTopicCode() {
		return topicCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public void setTopicCode(String topicCode) {
		this.topicCode = topicCode;
	}
}

