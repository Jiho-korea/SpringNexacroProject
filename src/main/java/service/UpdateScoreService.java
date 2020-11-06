/*
========================================================================
파    일    명 : UpdateScoreService.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : DAO를 이용해 학생 점수 데이터 받음
========================================================================
수    정    자 : 강지호
수    정    일 : 2020.11.07
수  정  내  용 : DAO를 이용한 학생 점수 업데이트 코드 추가
========================================================================
*/

package service;

import dao.StudentDAO;
import vo.UpdateScoreRequest;

public class UpdateScoreService {
	private StudentDAO studentDAO;

	// 의존주입
	public UpdateScoreService(StudentDAO studentDAO) {
		this.studentDAO = studentDAO;
	}

	// 매개변수로 받은 VO 내용대로 DAO에 업데이트 요청
	public int updateStudentScore(UpdateScoreRequest updateScoreReq) {
		int result = studentDAO.updateStudentScore(updateScoreReq);
		return result;
	}

}
