package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
	private static List<Topic> topicList = new ArrayList<Topic>();

	static {
		topicList.add(new Topic("ACM-IEEE-SE2014", "Computing Essentials", "Computer Science Foundations", "CMP.cf.1",
				"Programming Fundamentals (Control and Data Typing)", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Computing Essentials", "Computer Science Foundations", "CMP.cf.2",
				"Algorithms, Data Structures, and Complexity", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Computing Essentials", "Construction Technologies", "CMP.ct.1",
				"API Design and Use", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Computing Essentials", "Construction Technologies", "CMP.ct.2",
				"Object-Oriented Runtime Issues (e.g., polymorphism and dynamic) ", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Mathematical and Engineering Fundamentals", "Mathematical Foundations", "FND.mf.1",
				"Functions, Relations, and Sets ", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Mathematical and Engineering Fundamentals", "Mathematical Foundations", "FND.mf.2",
				"Basic Logic (Propositional and Predicate) ", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Professional Practice", "Group Dynamics and Psychology", "PRF.psy.1",
				"Dynamics of Working in Teams and Groups", null, null));
		topicList.add(new Topic("ACM-IEEE-SE2014", "Professional Practice", "Group Dynamics and Psychology", "PRF.psy.2",
				"Individual Cognition (e.g., limits)", null, null));
	}

	public List<Topic> getTopicList() {
		return topicList;
	}
}
