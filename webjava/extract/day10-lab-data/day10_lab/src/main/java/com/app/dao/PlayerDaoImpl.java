package com.app.dao;

import com.app.pojos.Player;
import com.app.pojos.Team;

import static com.app.utils.HibernateUtils.getFactory;
import org.hibernate.*;

public class PlayerDaoImpl implements PlayerDao {

	@Override
	public String addPlayerToTeam(Integer teamId, Player newPlayer) {
		String mesg="adding player to the team failed !!!!!";
		// 1. get session from SF
		Session session = getFactory().getCurrentSession();
		// 2. begin a tx
		Transaction tx = session.beginTransaction();
		try {
			//get team details from it's id
			Team team=session.get(Team.class, teamId);
			if(team != null)
			{
				//team exists , : persistent
				team.addPlayer(newPlayer);
				mesg="Added a new player to the team "+team.getName();
			}
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null)
				tx.rollback();
			throw e;
		}

		return mesg;
	}

}
