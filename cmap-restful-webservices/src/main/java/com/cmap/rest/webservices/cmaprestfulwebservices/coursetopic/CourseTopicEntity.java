package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "rmit_course_topic")
public class CourseTopicEntity {

	@EmbeddedId
	public CourseTopicId courseTopicId;
	@Column(name = "level")
	public String outcomeLevel;
	@Column(name = "requirement")
	public String preReqLevel;
	
	public CourseTopicEntity() {
	};

	public CourseTopicEntity(CourseTopicId courseTopicId, String outcomeLevel, String preReqLevel) {
		super();
		this.courseTopicId = courseTopicId;
		this.outcomeLevel = outcomeLevel;
		this.preReqLevel = preReqLevel;
	}

	public CourseTopicId getCourseTopicId() {
		return courseTopicId;
	}

	public void setCourseTopicId(CourseTopicId courseTopicId) {
		this.courseTopicId = courseTopicId;
	}

}
