/*
========================================================================
파    일    명 : StudentConfig.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.24
작  성  내  용 : 직접 만든 객체들 빈으로 등록
========================================================================
*/

package config;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import dao.StudentDAO;
import service.ScoreListService;

@Configuration
@EnableTransactionManagement
public class StudentConfig {
	// 커넥션 풀 객체
	@Bean(destroyMethod = "close")
	public DataSource dataSource() {
		DataSource ds = new DataSource();
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		ds.setUrl("jdbc:mysql://localhost/mavennexacro?characterEncoding=utf8");
		ds.setUsername("root");
		ds.setPassword("1111");
		ds.setInitialSize(2);
		ds.setMaxActive(10);
		ds.setTestWhileIdle(true);
		ds.setMinEvictableIdleTimeMillis(60000 * 3);
		ds.setTimeBetweenEvictionRunsMillis(10 * 1000);
		return ds;
	}

	// 트랜잭션 매니저
	@Bean
	public PlatformTransactionManager transactionManager() {
		DataSourceTransactionManager tm = new DataSourceTransactionManager();
		tm.setDataSource(dataSource());
		return tm;
	}

	// DAO 객체
	@Bean
	public StudentDAO studentDAO() {
		return new StudentDAO(dataSource());
	}

	// 서비스 객체
	@Bean
	public ScoreListService scoreListService() {
		return new ScoreListService(studentDAO());
	}

}
