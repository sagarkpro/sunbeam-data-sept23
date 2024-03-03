package com.app.beans;

import java.time.LocalDate;
import java.time.Period;

import com.app.dao.PlayerDao;
import com.app.dao.PlayerDaoImpl;
import com.app.dao.TeamDao;
import com.app.dao.TeamDaoImpl;
import com.app.pojos.Player;
import com.app.pojos.Team;

public class PlayerBean {
	private int teamId;
	private String fn;
	private String ln;
	private String dob;// WC Can't translate from string req param --> Date
	// prog has to do the conversion
	private double avg;
	private int wickets;
	// dependencies : daos
	private TeamDao teamDao;
	private PlayerDao playerDao;

	public PlayerBean() {
		teamDao = new TeamDaoImpl();
		playerDao = new PlayerDaoImpl();
		System.out.println("player bean n dao created...");
	}
	// setters for data binding from form (view layer) --> java bean (model)

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public void setFn(String fn) {
		this.fn = fn;
	}

	public void setLn(String ln) {
		this.ln = ln;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public void setAvg(double avg) {
		this.avg = avg;
	}

	public void setWickets(int wickets) {
		this.wickets = wickets;
	}

	// add B.L method to validate n add player
	public String validateAndAddPlayer() {
		System.out.println("in validate n add");
		// get selected team details
		Team team = teamDao.getTeamDetails(teamId);
		if (team != null) {
			// team : persistent
			// string dob --> LocalDate parsing
			LocalDate date = LocalDate.parse(dob);
			// validate player details
			int age = Period.between(date, LocalDate.now()).getYears();
			if (age < team.getMaxAge() 
					&& avg > team.getBattingAvg() 
					&& wickets > team.getWicketsTaken()) {
				// create transient player instance
				Player newPlayer = new Player(fn, ln, date, avg, wickets);
				// valid player details
				return playerDao.addPlayerToTeam(team.getId(), newPlayer);
			} else
				return "Invalid details of the player....";

		} else
			return "Invalid Team !!!!!";
	}

}
