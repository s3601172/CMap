package com.CmapProject.Cmap;

import org.junit.Assert;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.CmapProject.Cmap.course.RmitCourses;
import com.CmapProject.Cmap.coursetopic.CourseTopicController;
import com.CmapProject.Cmap.programcourse.RmitProgramCourseJpaResource;

import com.CmapProject.Cmap.programcoursebo.RmitProgramCourseBo;
import com.CmapProject.Cmap.topic.TopicEntity;
@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations={"classpath:application.properties"})
@SpringBootTest
public class CmapTest {

	
	
	
	@Autowired
	private RmitProgramCourseJpaResource RPCController;
	
	@Autowired
	private CourseTopicController CTController;

	private RmitCourses RC = new RmitCourses("COSC1076","Advanced Programming Techniques",12);
	
	private RmitProgramCourseBo RPCBo = new RmitProgramCourseBo("COSC1076",4,"BP094GEN8","Advanced Programming Techniques");
	
	private TopicEntity topic = new TopicEntity("CMP.cf.11","IEEE/ACM Software Engineering",
									"Computing Essentials","Computer science foundations",
									"Network protocols","Remembering(1)","Analyzing(4)");
	
	@Test
	public void addCourseTest() {
	
		RPCController.addProgramCourse(RC);
		
		System.out.println(RC.getcourseCode()+" is add in program success"); 
	}
	
	@Test
	public void updateCourseTest() {
	
		RPCController.updateCourseSemester(RPCBo);;
		
		System.out.println(RPCBo.getCourseCode()+" is update semester success"); 
	}
	
	@Test
	public void deleteCourseTest() {
	
		RPCController.deleteTodo(RPCBo.getProgramCode(),RPCBo.getCourseCode() , RPCBo.getsemester());
		
		System.out.println(RPCBo.getCourseCode()+" is delete semester success"); 
	}

	@Test
	public void addTopicTest() {
	
		CTController.addCourseTopic(topic);
		
		System.out.println(topic.getId()+" is add in access success"); 
	}
		
	@Test
	public void updateTopicTest() {
	
		CTController.updateCourseTopic(topic);
		
		System.out.println(topic.getId()+" is update level success"); 
	}
	
	@Test
	public void deleteTopicTest() {
	
		CTController.deleteCourseTopic(topic.getId());
		
		System.out.println(topic.getId()+" is remove from course success"); 
	}
	
	
}
