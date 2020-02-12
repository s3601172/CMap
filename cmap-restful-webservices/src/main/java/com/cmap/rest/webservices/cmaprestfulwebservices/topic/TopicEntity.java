package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

@Entity
@Table(name= "std_topic")
@SecondaryTables({
	@SecondaryTable(name="std_ku"),
	@SecondaryTable(name="std_ka"),
	@SecondaryTable(name="std_guidelines")
})
public class TopicEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "topic_code", table="std_topic")
	public String id;
	
	@Column(name = "name", table="std_guidelines")
	public String bokRef;
	
	@Column(name ="title", table="std_ka")
	public String area;
	
	@Column(name = "title", table="std_ku")
	public String unit;
	
	@Column(name = "title", table="std_topic")
	public String topic;
	
	@Column(name = "level", table="std_topic")
	public String outcomeLevel;
	
	@Column(name = "requirement", table="std_topic")
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
}
