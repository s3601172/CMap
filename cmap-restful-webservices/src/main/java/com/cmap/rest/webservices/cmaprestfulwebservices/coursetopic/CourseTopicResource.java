package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cmap.rest.webservices.cmaprestfulwebservices.topic.TopicEntity;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseTopicResource {
	@Autowired
	private CourseTopicRepository courseTopicDB;
	
	@PostMapping("add-course-topic")
	public @ResponseBody String addCourseTopic(@RequestBody TopicEntity topicEntity) {
		CourseTopicEntity newCourseTopic = new CourseTopicEntity();
		newCourseTopic.setCourseCode("C1111");
		newCourseTopic.setTopicCode(topicEntity.getId());
		courseTopicDB.save(newCourseTopic);
		return "Saved";		
	}
}

