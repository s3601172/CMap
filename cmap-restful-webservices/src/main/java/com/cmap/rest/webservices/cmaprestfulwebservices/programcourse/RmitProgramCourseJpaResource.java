package com.CmapProject.Cmap.programcourse;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.CmapProject.Cmap.course.RmitCourses;
import com.CmapProject.Cmap.programcoursebo.RmitProgramCourseBo;
import com.CmapProject.Cmap.programcoursebo.RmitProgramCourseBoJpaRepository;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RmitProgramCourseJpaResource {
	@Autowired
	private RmitProgramCourseJpaRepository rmitProgramJpaRespository;
	
		
	@DeleteMapping("/delete-program-course")
	public ResponseEntity<Void> deleteCourse(@RequestBody RmitProgramCourseBo rmitProgramCourseBo){
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		programcourseId.setCourseCode(rmitProgramCourseBo.getCourseCode());
		System.out.println(programcourseId.getCourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(rmitProgramCourseBo.getsemester());
		rpc.setProgramCourseID(programcourseId);
		rmitProgramJpaRespository.deleteById(programcourseId);;

		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/update-program-course")
	public ResponseEntity<RmitProgramCourseEntity> updateTodo(@RequestBody RmitProgramCourseBo rmitProgramCourseBo){
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		programcourseId.setCourseCode(rmitProgramCourseBo.getCourseCode());
		System.out.println(programcourseId.getCourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(rmitProgramCourseBo.getsemester());
		rpc.setProgramCourseID(programcourseId);
		
		
		RmitProgramCourseEntity todoUpdated = rmitProgramJpaRespository.save(rpc);
		return new ResponseEntity<RmitProgramCourseEntity> (rpc,HttpStatus.OK);
	}
	
	@PostMapping(path="/add-program-course", consumes = "application/json", produces = "application/json")
	public  void addProgramCourse(@RequestBody RmitCourses rmitCourse) {
		RmitProgramCoursePk programcourseId = new RmitProgramCoursePk();
		//System.out.println(rmitCourse.getcourseCode());
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		programcourseId.setCourseCode(rmitCourse.getcourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setsemester(0);
		//RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		rpc.setProgramCourseID(programcourseId);
		//System.out.println(rpc);
		rmitProgramJpaRespository.save(rpc);
		
	}
	
	
	
}
