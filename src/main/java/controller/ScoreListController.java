/*
========================================================================
파    일    명 : ScoreListController.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 학생 테이블 정보 조회 후 넥사크로에 리턴
========================================================================
*/

package controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

import service.ScoreListService;

@Controller
public class ScoreListController {
	ScoreListService scoreListService;
	// 명시적 의존 주입
	public void setScoreListService(ScoreListService scoreListService) {
		this.scoreListService = scoreListService;
	}

	@RequestMapping(value = "/list/score", produces = "application/xml; charset=UTF8")
	@ResponseBody
	public void scorelist(HttpServletResponse response) throws Exception {

		// 응답 데이터 생성
		PlatformData out_pData = new PlatformData();

		// 서비스 객체에 의존하여 Dataset 리턴 받음
		DataSet ds = scoreListService.studentScoreList();

		// 서비스 - DAO로 받은 데이터 셋을 응답 데이터 객체에 추가
		out_pData.addDataSet(ds);

		// 응답, 에러코드 생성
		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", 0);
		out_varList.add("ErrorMsg", "학생 성적 조회 성공");

		// Response 객체 생성
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");	
		// 응답 데이터 담기
		pRes.setData(out_pData);
		// 클라이언트에 응답
		pRes.sendData();
	}
}
