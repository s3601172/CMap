package com.CmapProject.Cmap.topic;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "std_topic")
public class TopicEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "topic_code")
	public String id;
	
	@Column(name = "guideline")
	public String bokRef;
	
	@Column(name ="ka")
	public String area;
	
	@Column(name = "ku")
	public String unit;
	
	@Column(name = "title")
	public String topic;
	
	@Column(name = "level")
	public String outcomeLevel;
	
	@Column(name = "requirement")
	public String preReqLevel;
	
	public TopicEntity() {
		
	}

	public TopicEntity(String id, String unit, String topic, String outcomeLevel, String preReqLevel) {
		this.id = id;
		this.unit = unit;
		this.topic = topic;
		this.outcomeLevel = outcomeLevel;
		this.preReqLevel = preReqLevel;
	}


	
}
