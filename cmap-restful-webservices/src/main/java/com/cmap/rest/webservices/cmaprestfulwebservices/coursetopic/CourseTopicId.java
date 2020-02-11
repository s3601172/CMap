package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Table;

@Embeddable
@Table(name="rmit_course_topic")
public class CourseTopicId implements Serializable{
	private static final long serialVersionUID = 1L;

	@Column(name="course_code")
	public String courseCode;
	
	@Column(name="topic_code")
	public String topicCode;

	public CourseTopicId() {}
	
	public CourseTopicId(String courseCode, String topicCode) {
		super();
		this.courseCode = courseCode;
		this.topicCode = topicCode;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public String getTopicCode() {
		return topicCode;
	}

	public void setTopicCode(String topicCode) {
		this.topicCode = topicCode;
	}
}
