/*
========================================================================
파    일    명 : UpdateScoreRequest.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.11.07
작  성  내  용 : 학생 점수 수정 내용 담는 VO 객체
========================================================================
*/
package vo;

public class UpdateScoreRequest {
	public String studentId;
	public int attendanceDay;
	public float attendance;
	public int middleScore;
	public int homework;
	public int finalScore;
	public int unitScore;
	public String grade;
	public int adjustScore;
	public int allScore;
	public String finalGrade;
	public float gpa;

	public UpdateScoreRequest() {
		super();
	}

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public int getAttendanceDay() {
		return attendanceDay;
	}

	public void setAttendanceDay(int attendanceDay) {
		this.attendanceDay = attendanceDay;
	}

	public float getAttendance() {
		return attendance;
	}

	public void setAttendance(float attendance) {
		this.attendance = attendance;
	}

	public int getMiddleScore() {
		return middleScore;
	}

	public void setMiddleScore(int middleScore) {
		this.middleScore = middleScore;
	}

	public int getHomework() {
		return homework;
	}

	public void setHomework(int homework) {
		this.homework = homework;
	}

	public int getFinalScore() {
		return finalScore;
	}

	public void setFinalScore(int finalScore) {
		this.finalScore = finalScore;
	}

	public int getUnitScore() {
		return unitScore;
	}

	public void setUnitScore(int unitScore) {
		this.unitScore = unitScore;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public int getAdjustScore() {
		return adjustScore;
	}

	public void setAdjustScore(int adjustScore) {
		this.adjustScore = adjustScore;
	}

	public int getAllScore() {
		return allScore;
	}

	public void setAllScore(int allScore) {
		this.allScore = allScore;
	}

	public String getFinalGrade() {
		return finalGrade;
	}

	public void setFinalGrade(String finalGrade) {
		this.finalGrade = finalGrade;
	}

	public float getGpa() {
		return gpa;
	}

	public void setGpa(float gpa) {
		this.gpa = gpa;
	}

}
