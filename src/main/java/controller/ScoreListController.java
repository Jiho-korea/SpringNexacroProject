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

	public void setScoreListService(ScoreListService scoreListService) {
		this.scoreListService = scoreListService;
	}

	@RequestMapping(value = "/list/score", produces = "application/xml; charset=UTF8")
	@ResponseBody
	public void scorelist(HttpServletResponse response) throws Exception {

		// Response 생성
		PlatformData out_pData = new PlatformData();

		DataSet ds = scoreListService.studentScoreList();

		// DAO로 받은 데이터 셋을 RESPONSE 객체에 추가
		out_pData.addDataSet(ds);

		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", 0);
		out_varList.add("ErrorMsg", "성공");

		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(out_pData);

		pRes.sendData();
	}

}
