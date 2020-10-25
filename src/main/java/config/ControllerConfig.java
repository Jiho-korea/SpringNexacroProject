/*
========================================================================
파    일    명 : ControllerConfig.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 컨트롤러 설정 클래스
========================================================================
*/

package config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import controller.HelloController;
import controller.ScoreListController;
import service.ScoreListService;

@Configuration
public class ControllerConfig {
	@Autowired
	ScoreListService scoreListService;

	@Bean
	public HelloController HelloController() {
		return new HelloController();
	}

	@Bean
	public ScoreListController scoreListController() {
		ScoreListController scoreListController = new ScoreListController();
		scoreListController.setScoreListService(scoreListService);
		return scoreListController;
	}
}
