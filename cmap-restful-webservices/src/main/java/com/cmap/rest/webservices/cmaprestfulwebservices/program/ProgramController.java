package com.cmap.rest.webservices.cmaprestfulwebservices.program;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins="http://localhost:3000")
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
