package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TopicResource {
	@Autowired
	private TopicDBRepository topicDB;
	
	@GetMapping("topic-list")
	public List<TopicEntity> getTopicList(){
		return topicDB.findAll();	
	}
}
