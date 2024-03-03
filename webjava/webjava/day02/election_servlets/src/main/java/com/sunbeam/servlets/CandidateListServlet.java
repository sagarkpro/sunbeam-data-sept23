package com.sunbeam.servlets;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import com.sunbeam.daos.CandidateDao;
import com.sunbeam.daos.CandidateDaoImpl;
import com.sunbeam.pojos.Candidate;

@WebServlet("/candlist")
public class CandidateListServlet extends HttpServlet {
	protected void doPost(javax.servlet.http.HttpServletRequest req, javax.servlet.http.HttpServletResponse resp) throws javax.servlet.ServletException ,java.io.IOException {
		processRequest(req, resp);
	}
	protected void doGet(javax.servlet.http.HttpServletRequest req, javax.servlet.http.HttpServletResponse resp) throws javax.servlet.ServletException ,java.io.IOException {
		processRequest(req, resp);
	}
	protected void processRequest(javax.servlet.http.HttpServletRequest req, javax.servlet.http.HttpServletResponse resp) throws javax.servlet.ServletException ,java.io.IOException {
		// business logic
		List<Candidate> list = new ArrayList<>();
		try(CandidateDao dao = new CandidateDaoImpl()) {
			list = dao.findAll();
		}
		catch (Exception e) {
			e.printStackTrace();
			throw new ServletException(e);
		}
		// presentation logic
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Candidates</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("Hello, Voter! <hr/>");
		out.println("<form method='post' action='vote'>");
		for (Candidate c : list)
			out.printf("<input type='radio' name='candidate' value='%s'/> %s - %s <br/>\n", 
											c.getId(), c.getName(), c.getParty());
		out.println("<input type='submit' value='Vote'/>");
		out.println("</form>");
		out.println("</body>");
		out.println("</html>");

	}
}











