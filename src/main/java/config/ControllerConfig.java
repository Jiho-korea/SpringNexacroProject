/*
========================================================================
파    일    명 : ControllerConfig.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 컨트롤러 설정 클래스 (학생 점수 리스트 컨트롤러 빈 등록)
========================================================================
수    정    자 : 강지호
수    정    일 : 2020.11.07
수  정  내  용 : 학생 점수 업데이트 컨트롤러 빈 등록
========================================================================
*/

package config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import controller.HelloController;
import controller.ScoreListController;
import controller.UpdateScoreController;
import service.ScoreListService;
import service.UpdateScoreService;

@Configuration
public class ControllerConfig {
	@Autowired
	ScoreListService scoreListService;

	@Autowired
	UpdateScoreService updateScoreService;

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

	@Bean
	public UpdateScoreController updateScoreController() {
		UpdateScoreController updateScoreController = new UpdateScoreController();
		updateScoreController.setUpdateScoreService(updateScoreService);
		return updateScoreController;
	}

}
