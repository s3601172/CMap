package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends JpaRepository<TopicEntity, String>{
	@Query(value="SELECT std_guidelines.name, std_ka.title, std_ku.title, std_topic.topic_code, std_topic.level, std_topic.requirement \r\n" + 
			"FROM std_guidelines, std_ka, std_ku, std_topic\r\n" + 
			"WHERE std_topic.ku = std_ku.ku_code \r\n" + 
			"AND std_ku.ka = std_ka.ka_code \r\n" + 
			"AND std_ka.id_guidelines = std_guidelines.id;", nativeQuery = true)
	List<TopicEntity> getTopics();
	
	@Query(value="SELECT rmit_course_topic.course_code,std_guidelines.name, std_ka.titles, std_ku.title, std_topic.topic_code, std_topic.level, std_topic.requirement\n" + 
            "FROM rmit_course_topic,std_guidelines, std_ka, std_ku, std_topic \n" + 
            "WHERE rmit_course_topic.course_code = ?1\n" + 
            "AND rmit_course_topic.topic_code = std_topic.topic_code \n" + 
            "AND std_topic.ku = std_ku.ku_code \n" + 
            "AND std_ku.ka = std_ka.ka_code \n" + 
            "AND std_ka.id_guidelines = std_guidelines.id;", nativeQuery = true)
List<TopicEntity> getCourseDetails(String courseCode);
}

