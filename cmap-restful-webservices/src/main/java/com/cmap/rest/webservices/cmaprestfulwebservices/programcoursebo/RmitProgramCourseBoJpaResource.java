package com.CmapProject.Cmap.programcoursebo;
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
public class RmitProgramCourseBoJpaResource {
	
	@Autowired
	private RmitProgramCourseBoJpaRepository rmitProgramBoJpaRespository;
	
	
	
	@GetMapping("/allCourseinProgram/{programCode}")
	public List<RmitProgramCourseBo> getAllCourseinProgram(@PathVariable String programCode){
		return rmitProgramBoJpaRespository.findAllCourseByProgram(programCode);
		//return todoService.findAll();
	}
	
	
	
	
	
}
