package com.app.dao;

import java.util.List;

import com.app.pojos.Team;

public interface TeamDao {
	List<Team> getTeamDetails();
	//get team details by it's id
	Team getTeamDetails(Integer teamId);
}
