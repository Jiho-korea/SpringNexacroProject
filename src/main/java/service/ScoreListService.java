/*
========================================================================
파    일    명 : ScoreListService.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : DAO를 이용해 데이터 받음
========================================================================
*/

package service;

import com.nexacro17.xapi.data.DataSet;

import dao.StudentDAO;

public class ScoreListService {
	private StudentDAO studentDAO;

	// 의존주입
	public ScoreListService(StudentDAO studentDAO) {
		this.studentDAO = studentDAO;
	}

	// 해당 페이지의 게시글 리스트 가져옴
	public DataSet studentScoreList() {
		DataSet ds = studentDAO.listStudentScore();
		return ds;
	}

}
