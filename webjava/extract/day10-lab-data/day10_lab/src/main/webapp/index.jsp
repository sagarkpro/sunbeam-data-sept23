<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<%--create team bean --%>
<jsp:useBean id="team_bean" class="com.app.beans.TeamBean"
	scope="session" />
<jsp:useBean id="player_bean" class="com.app.beans.PlayerBean"
	scope="session" />
<body>
	<h3>
		Welcome 2 Web App with Hibernate @
		<%=new Date()%></h3>
	<h5>
		<a href="add_player_form.jsp">Add New Player</a>
	</h5>
</body>
</html>