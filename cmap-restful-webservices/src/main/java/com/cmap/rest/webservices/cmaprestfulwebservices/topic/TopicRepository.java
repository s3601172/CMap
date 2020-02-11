import org.springframework.data.jpa.repository.JpaRepository;

package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
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
}

