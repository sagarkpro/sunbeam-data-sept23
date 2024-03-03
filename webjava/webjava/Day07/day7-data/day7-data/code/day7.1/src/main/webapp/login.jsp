<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>SignIn -SignUp Page</title>
</head>
<jsp:useBean id="user_bean" class="beans.UserBean" 
scope="session" />
<jsp:useBean id="candidate_bean" class="beans.CandidateBean"
	scope="session" />

<body>
  <form action="authenticate.jsp" method="post">
      <table style="background-color: lightgrey; margin: auto">
        <tr>
          <td>Enter User Email</td>
          <td><input type="email" name="em" /></td>
        </tr>
        <tr>
          <td>Enter Password</td>
          <td><input type="password" name="pass" /></td>
        </tr>

        <tr>
          <td><input type="submit" value="Login" /></td>
          <td><a href="register.jsp">Sign Up</a></td>
        </tr>
      </table>
    </form>
</body>
</html>