/*
========================================================================
파    일    명 : StudentDAO.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 스프링 JDBC를 이용해 데이터베이스에서 쿼리 조회 후 각 레코드를 데이터 셋의 1ROW로 매핑 한 후 최종 데이터 셋을 만들어 리턴
========================================================================
수    정    자 : 강지호
수    정    일 : 2020.11.07
수  정  내  용 : 스프링 JDBC를 이용해 학생 성적 업테이트 후 변환된 레코드 수를 리턴 받는 코드 추가
========================================================================
*/

package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import vo.UpdateScoreRequest;

// DB STUDENT 테이블에 접근하는 DAO
public class StudentDAO {
	private JdbcTemplate jdbcTemplate;

	public StudentDAO(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	// 학생 리스트 받는 메소드
	public DataSet listStudentScore() {
		DataSet ds = new DataSet("scorelist");
		ds.addColumn("학과", DataTypes.STRING, (short) 256);
		ds.addColumn("성명", DataTypes.STRING, (short) 256);
		ds.addColumn("학번", DataTypes.STRING, (short) 256);
		ds.addColumn("재수강", DataTypes.STRING, (short) 256);
		ds.addColumn("전자출결", DataTypes.INT, (short) 256);
		ds.addColumn("출석", DataTypes.FLOAT, (short) 256);
		ds.addColumn("중간", DataTypes.INT, (short) 256);
		ds.addColumn("과제", DataTypes.INT, (short) 256);
		ds.addColumn("기말", DataTypes.INT, (short) 256);
		ds.addColumn("단위점수계", DataTypes.INT, (short) 256);
		ds.addColumn("등급", DataTypes.STRING, (short) 256);
		ds.addColumn("조정점수", DataTypes.INT, (short) 256);
		ds.addColumn("성적총점", DataTypes.INT, (short) 256);
		ds.addColumn("최종등급", DataTypes.STRING, (short) 256);
		ds.addColumn("평점", DataTypes.FLOAT, (short) 256);

		// DB에 SELECT 요청 보냄
		List<DataSet> results = jdbcTemplate.query("SELECT * FROM mavennexacro.student", new RowMapper<DataSet>() {
			// ResultSet의 1레코드를 Dataset 객체의 1row로 매핑
			@Override
			public DataSet mapRow(ResultSet rs, int rowNum) throws SQLException {
				int row = ds.newRow();
				ds.set(row, "학과", rs.getString("STUDENT_SUBJECT"));
				ds.set(row, "성명", rs.getString("STUDENT_NAME"));
				ds.set(row, "학번", rs.getString("STUDENT_ID"));
				ds.set(row, "재수강", rs.getString("STUDENT_RETAKE"));
				ds.set(row, "전자출결", rs.getInt("STUDENT_ATTENDANCE_DAY"));
				ds.set(row, "출석", rs.getFloat("STUDENT_ATTENDANCE"));
				ds.set(row, "중간", rs.getInt("STUDENT_MIDDLE_SCORE"));
				ds.set(row, "과제", rs.getInt("STUDENT_HOMEWORK"));
				ds.set(row, "기말", rs.getInt("STUDENT_FINAL_SCORE"));
				ds.set(row, "단위점수계", rs.getInt("STUDENT_UNIT_SCORE"));
				ds.set(row, "등급", rs.getString("STUDENT_GRADE"));
				ds.set(row, "조정점수", rs.getInt("STUDENT_ADJUST_SCORE"));
				ds.set(row, "성적총점", rs.getInt("STUDENT_ALL_SCORE"));
				ds.set(row, "최종등급", rs.getString("STUDENT_FINAL_GRADE"));
				ds.set(row, "평점", rs.getFloat("STUDENT_GPA"));
				return ds;
			}
		});
		// Dataset 리턴
		return results.isEmpty() ? null : results.get(0);
	}

	// 학생 성적 업데이트 하는 메소드
	public int updateStudentScore(UpdateScoreRequest updateScoreReq) {
		int result = jdbcTemplate.update(
				"UPDATE mavennexacro.student SET STUDENT_ATTENDANCE_DAY = ?, STUDENT_ATTENDANCE = ?, "
						+ "STUDENT_MIDDLE_SCORE = ?, STUDENT_HOMEWORK = ?, STUDENT_FINAL_SCORE = ?, "
						+ "STUDENT_UNIT_SCORE = ?, STUDENT_GRADE = ?, STUDENT_ADJUST_SCORE = ?, STUDENT_ALL_SCORE = ?,"
						+ "STUDENT_FINAL_GRADE = ?, STUDENT_GPA = ? WHERE STUDENT_ID = ?",
				updateScoreReq.getAttendanceDay(), updateScoreReq.getAttendance(), updateScoreReq.getMiddleScore(),
				updateScoreReq.getHomework(), updateScoreReq.getFinalScore(), updateScoreReq.getUnitScore(),
				updateScoreReq.getGrade(), updateScoreReq.getAdjustScore(), updateScoreReq.getAllScore(),
				updateScoreReq.getFinalGrade(), updateScoreReq.getGpa(), updateScoreReq.getStudentId());

		return result;
	}

}
