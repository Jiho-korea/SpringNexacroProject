<%--
========================================================================
파    일    명 : hello.jsp
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.23
작  성  내  용 : C 테스트, HelloWorld 출력용 JSP 
========================================================================
수    정    자 : 강지호
수    정    일 : 2020.10.23
수  정  내  용 : X-API 라이브러리 정보 조회 추가
========================================================================
 --%>

<%@page import="java.io.StringWriter"%>
<%@page import="java.io.Writer"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello</title>
</head>
<body>
	<h1>Hello World!</h1>
	<pre>
        <%
       		Writer writer = new StringWriter();
        	new com.nexacro17.xapi.util.JarInfo().info(writer);
        %>
        <%=writer %>
        </pre>
</body>
</html>