package com.cmap.rest.webservices.cmaprestfulwebservices.coursetopic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseTopicServiceImpl implements CourseTopicService {
	@Autowired
	CourseTopicRepository courseTopicRepository;
	
	@Override
	public void addCourseTopic(String topicCode) {
		courseTopicRepository.save(new CourseTopicEntity("C1111", topicCode));
	}

}
