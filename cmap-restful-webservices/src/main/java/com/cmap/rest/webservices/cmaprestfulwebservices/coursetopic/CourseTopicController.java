package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/add-course-topic")
public class CourseTopicController {
	@Autowired
	CourseTopicService courseTopicService;
	
	@PostMapping
	public ResponseEntity<?> addCourseTopic(@RequestBody String topicCode) {
		courseTopicService.addCourseTopic(topicCode);
		return new ResponseEntity("CourseTopic added succcessfully", HttpStatus.OK);
	}

}
