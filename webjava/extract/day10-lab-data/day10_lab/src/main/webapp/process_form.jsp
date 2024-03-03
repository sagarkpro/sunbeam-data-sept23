<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<%--invoke matching setters --%>
<jsp:setProperty property="*" name="player_bean"/>
<body>
<%--invoke B.L of player bean to add new player --%>
<h5>Adding Player status : ${sessionScope.player_bean.validateAndAddPlayer()}</h5>
</body>
</html>