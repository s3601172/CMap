package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CourseTopicRepository extends JpaRepository<CourseTopicEntity, Integer> {

	@Query(value="SELECT * FROM rmit_course_topic WHERE course_code =?1 AND topic_code =?2", nativeQuery = true)
	CourseTopicEntity findByCourseCode(String courseCode, String topicCode);
	
}


