package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "rmit_course_topic")
public class CourseTopicEntity {

	@EmbeddedId
	public CourseTopicId courseTopicId;

	public CourseTopicEntity() {
	};

	public CourseTopicEntity(CourseTopicId courseTopicId) {
		super();
		this.courseTopicId = courseTopicId;
	}

	public CourseTopicId getCourseTopicId() {
		return courseTopicId;
	}

	public void setCourseTopicId(CourseTopicId courseTopicId) {
		this.courseTopicId = courseTopicId;
	}

}
