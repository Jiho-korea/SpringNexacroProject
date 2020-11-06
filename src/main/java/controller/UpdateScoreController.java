/*
========================================================================
파    일    명 : UpdateScoreController.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.11.07
작  성  내  용 : 넥사크로로 부터 요청 파라미터 받고 학생 테이블 점수 업데이트 후 넥사크로로 응답
========================================================================
*/

package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

import service.UpdateScoreService;
import vo.UpdateScoreRequest;

@Controller
public class UpdateScoreController {
	UpdateScoreService updateScoreService;

	public void setUpdateScoreService(UpdateScoreService updateScoreService) {
		this.updateScoreService = updateScoreService;
	}

	@RequestMapping(value = "/update/score", produces = "application/xml; charset=UTF8")
	@ResponseBody
	public void scorelist(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int retCode;
		String retMsg;

		// Response 생성
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		VariableList in_varList = in_pData.getVariableList();

		UpdateScoreRequest updateScoreReq = new UpdateScoreRequest();
		updateScoreReq.setStudentId(in_varList.getString("studentId"));
		updateScoreReq.setAttendanceDay(in_varList.getInt("attendanceDay"));
		updateScoreReq.setAttendance(in_varList.getFloat("attendance"));
		updateScoreReq.setMiddleScore(in_varList.getInt("middleScore"));
		updateScoreReq.setHomework(in_varList.getInt("homework"));
		updateScoreReq.setFinalScore(in_varList.getInt("finalScore"));
		updateScoreReq.setUnitScore(in_varList.getInt("unitScore"));
		updateScoreReq.setGrade(in_varList.getString("grade"));
		updateScoreReq.setAdjustScore(in_varList.getInt("adjustScore"));
		updateScoreReq.setAllScore(in_varList.getInt("allScore"));
		updateScoreReq.setFinalGrade(in_varList.getString("finalGrade"));
		updateScoreReq.setGpa(in_varList.getFloat("gpa"));

		int result = updateScoreService.updateStudentScore(updateScoreReq);

		if (result == 1) {
			retCode = 0;
			retMsg = "학생 성적 입력 완료";
		} else {
			retCode = -1;
			retMsg = "학생 성적 입력 실패";
		}

		// response 생성
		PlatformData out_pData = new PlatformData();

		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", retCode);
		out_varList.add("ErrorMsg", retMsg);

		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(out_pData);

		pRes.sendData();
	}

}
