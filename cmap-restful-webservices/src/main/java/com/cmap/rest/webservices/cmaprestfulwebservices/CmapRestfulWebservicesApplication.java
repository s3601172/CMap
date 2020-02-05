package com.cmap.rest.webservices.cmaprestfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.cmap.rest.webservices.cmaprestfulwebservices.course")
public class CmapRestfulWebservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmapRestfulWebservicesApplication.class, args);
	}

}
