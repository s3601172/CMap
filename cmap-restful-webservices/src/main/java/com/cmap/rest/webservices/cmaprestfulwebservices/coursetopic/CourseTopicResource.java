package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cmap.rest.webservices.cmaprestfulwebservices.topic.TopicEntity;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseTopicResource {
	@Autowired
	private CourseTopicRepository courseTopicDB;

	@GetMapping("course-topic")
	public boolean getCourseTopic(@RequestParam("data") String courseCode, String topicCode) {
		CourseTopicEntity courseSearch = courseTopicDB.findByCourseCode(courseCode, topicCode);
		if (courseSearch == null) {
			return true;
		}

		return false;
	}

	@PostMapping("add-course-topic")
	public @ResponseBody String addCourseTopic(@RequestBody TopicEntity topicEntity) {
		CourseTopicId newCourseTopicId = new CourseTopicId();
		newCourseTopicId.setCourseCode("C1111");
		newCourseTopicId.setTopicCode(topicEntity.getId());

		CourseTopicEntity newCourseTopic = new CourseTopicEntity(newCourseTopicId);

		boolean courseSearch = getCourseTopic("C1111", topicEntity.getId());

		if (courseSearch == true) {
			courseTopicDB.save(newCourseTopic);
			return "Saved";
		} else {
			return "Duplicate Entry";
		}
	}
}
