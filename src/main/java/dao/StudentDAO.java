/*
========================================================================
파    일    명 : StudentDAO.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 스프링 JDBC를 이용해 데이터베이스에서 쿼리 조회 후 각 레코드를 데이터 셋의 1ROW로 매핑 한 후 최종 데이터 셋을 만들어 리턴
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

// DB STUDENT 테이블에 접근하는 DAO
public class StudentDAO {
	private JdbcTemplate jdbcTemplate;

	public StudentDAO(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public DataSet listStudentScore() {
		DataSet ds = new DataSet("scorelist");
		ds.addColumn("학과", DataTypes.STRING, (short) 256);
		ds.addColumn("성명", DataTypes.STRING, (short) 256);
		ds.addColumn("학번", DataTypes.STRING, (short) 256);
		ds.addColumn("재수강", DataTypes.STRING, (short) 256);
//		ds.addColumn("전자출결", DataTypes.INT, (short) 256);
//		ds.addColumn("출석", DataTypes.FLOAT, (short) 256);
//		ds.addColumn("중간", DataTypes.INT, (short) 256);
//		ds.addColumn("과제", DataTypes.INT, (short) 256);
//		ds.addColumn("기말", DataTypes.INT, (short) 256);
//		ds.addColumn("단위점수계", DataTypes.INT, (short) 256);
//		ds.addColumn("등급", DataTypes.STRING, (short) 256);
//		ds.addColumn("조정점수", DataTypes.INT, (short) 256);
//		ds.addColumn("성적총점", DataTypes.INT, (short) 256);
//		ds.addColumn("최종등급", DataTypes.STRING, (short) 256);
//		ds.addColumn("평점", DataTypes.FLOAT, (short) 256);

		List<DataSet> results = jdbcTemplate.query("SELECT * FROM mavennexacro.student", new RowMapper<DataSet>() {
			@Override
			public DataSet mapRow(ResultSet rs, int rowNum) throws SQLException {
				int row = ds.newRow();
				ds.set(row, "학과", rs.getString("STUDENT_ID"));
				ds.set(row, "성명", rs.getString("STUDENT_NAME"));
				ds.set(row, "학번", rs.getString("STUDENT_SUBJECT"));
				ds.set(row, "재수강", rs.getString("STUDENT_RETAKE"));

//				ds.set(row, "전자출결", rs.getString("GENDER"));
//				ds.set(row, "출석", rs.getString("HIRE_DATE"));
//				ds.set(row, "중간", rs.getString("MARRIED"));
//				ds.set(row, "과제", rs.getString("SALARY"));
//				ds.set(row, "기말", rs.getString("MEMO"));
//				ds.set(row, "단위점수계", rs.getString("GENDER"));
//				ds.set(row, "등급", rs.getString("HIRE_DATE"));
//				ds.set(row, "조정점수", rs.getString("MARRIED"));
//				ds.set(row, "성적총점", rs.getString("SALARY"));
//				ds.set(row, "최종등급", rs.getString("MEMO"));
//				ds.set(row, "평점", rs.getString("MEMO"));

				return ds;
			}
		});

		return results.isEmpty() ? null : results.get(0);

	}
//
//	public int insertStudent(Student student) {
//		int result = jdbcTemplate.update(
//				"INSERT INTO student(SID,NAME,PASSWORD,GRADE,SUBJECT,MANAGER) VAlUES(?, ?, ?, ?, ?, 0)",
//				student.getSid(), student.getName(), student.getPassword(), student.getGrade(), student.getSubject());
//
//		return result;
//	}
//
//	public Student selectBySidPassword(LoginRequest loginRequest) {
//		List<Student> results = jdbcTemplate.query("SELECT * FROM student WHERE SID = ? AND PASSWORD = ?",
//				new RowMapper<Student>() {
//					@Override
//					public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
//						Student student = new Student(rs.getInt("SID"), rs.getString("NAME"), rs.getString("PASSWORD"),
//								rs.getInt("GRADE"), rs.getString("SUBJECT"));
//						return student;
//					}
//				}, Integer.parseInt(loginRequest.getSid()), loginRequest.getPassword());
//
//		return results.isEmpty() ? null : results.get(0);
//
//	}

}