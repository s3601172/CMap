package com.CmapProject.Cmap.program;
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


@RestController
//@CrossOrigin(origins="http://localhost:3000")
public class RmitProgramJpaResource {
	@Autowired
	private RmitProgramJpaRepository rmitProgramJpaRespository;
	
	@GetMapping("/code/{code}/year/{year}")	
	public List<RmitProgram> getOneProgramTodo(@PathVariable String code, @PathVariable int year){
		RmitProgramId programId = new RmitProgramId("BP094GEN8",2018);
		return rmitProgramJpaRespository.findByProgramID(programId);
		//return todoService.findAll();
	}
	
	
	
}
