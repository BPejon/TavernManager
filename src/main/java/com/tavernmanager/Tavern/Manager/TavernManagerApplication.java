package com.tavernmanager.Tavern.Manager;


//import io.swagger.annotations.Info;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@OpenAPIDefinition( info = @Info(title = "Tavern Manager", description = "Tavern Managment System"))
public class TavernManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TavernManagerApplication.class, args);
	}


}
