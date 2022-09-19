package com.tavernmanager.Tavern.Manager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;;

import java.util.ArrayList;

@Configuration
public class SwaggerConfig{

}

/*
@EnableSwagger2
@Configuration
public class SwaggerConfig extends WebMvcConfigurationSupport{
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

        private ApiInfo metaData(){
        Contact contact = new Contact("Breno Pejon", "https://springframework.guru/about", "breno.rodrigues@opus-software.com.br");

        return new ApiInfo("Tavern Manager",
                "Tavern Managemnet System",
                "1.0",
                "Terms of Service: good",
                contact,
                "Apache License Version 2.0",
                "https://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList<>());
    }
}
 */
