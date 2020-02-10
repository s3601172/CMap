package com.CmapProject.Cmap.program_course;
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


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RmitProgramCourseJpaResource {
	@Autowired
	private RmitProgramCourseJpaRepository rmitProgramJpaRespository;
	
	@Autowired
	private RmitProgramCourseBoJpaRepository rmitProgramBoJpaRespository;
	
	@GetMapping("/courseCode/{courseCode}/programCode/{programCode}")	
	public List<RmitProgramCourseEntity> getOneProgramTodo(@PathVariable String courseCode, @PathVariable String programCode){
		RmitProgramCourseId programcourseId = new RmitProgramCourseId("COSC1076",2,"BP094GEN8");
		return rmitProgramJpaRespository.findByProgramCourseID(programcourseId);
		//return todoService.findAll();
	}
	
	@GetMapping("/allCourseinProgram/{programCode}")
	public List<RmitProgramCourseBo> getAllCourseinProgram(@PathVariable String programCode){
		return rmitProgramBoJpaRespository.findAllCourseByProgram(programCode);
		//return todoService.findAll();
	}
	
	// cannot get year from rmit course table
	@DeleteMapping("/deletecoursefromprogram/courseCode/{courseCode}/programCode/{programCode}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String courseCode,	@PathVariable String programCode){
		RmitProgramCourseId programcourseId = new RmitProgramCourseId("COSC1076",2,"BP094GEN8");
		rmitProgramJpaRespository.deleteById(programcourseId); 

		return ResponseEntity.noContent().build();
		
	}
	
	
	@PostMapping(path="/add-program-course", consumes = "application/json", produces = "application/json")
	public  void addProgramCourse(@RequestBody RmitCourses rmitCourse) {
		RmitProgramCourseId programcourseId = new RmitProgramCourseId();
		//System.out.println(rmitCourse.getcourseCode());
		programcourseId.setCourseCode(rmitCourse.getcourseCode());
		programcourseId.setProgramCode("BP094GEN8");
		programcourseId.setYear(0);
		RmitProgramCourseEntity rpc = new RmitProgramCourseEntity();
		rpc.setProgramCourseID(programcourseId);
		//System.out.println(rpc);
		rmitProgramJpaRespository.save(rpc);
		
	}
	
	
	
}
