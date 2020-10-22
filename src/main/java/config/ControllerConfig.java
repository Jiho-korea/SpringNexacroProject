package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import controller.HelloController;

@Configuration
public class ControllerConfig {
	@Bean
	public HelloController HelloController() {
		return new HelloController();
	}
}
