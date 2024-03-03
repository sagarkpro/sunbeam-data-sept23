package com.app.dao;

import com.app.pojos.Player;

public interface PlayerDao {
//add a method to add player to the team
	String addPlayerToTeam(Integer teamId,Player newPlayer);
}
