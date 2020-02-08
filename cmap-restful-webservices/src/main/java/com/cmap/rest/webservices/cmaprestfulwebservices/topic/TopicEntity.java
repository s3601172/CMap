package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

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
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBokRef() {
		return bokRef;
	}

	public void setBokRef(String bokRef) {
		this.bokRef = bokRef;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getOutcomeLevel() {
		return outcomeLevel;
	}

	public void setOutcomeLevel(String outcomeLevel) {
		this.outcomeLevel = outcomeLevel;
	}

	public String getPreReqLevel() {
		return preReqLevel;
	}

	public void setPreReqLevel(String preReqLevel) {
		this.preReqLevel = preReqLevel;
	}

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
