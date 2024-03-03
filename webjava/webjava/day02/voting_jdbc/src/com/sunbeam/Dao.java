package com.sunbeam;

import java.sql.Connection;

public class Dao implements AutoCloseable {
	protected Connection con;
	public Dao() throws Exception {
		con = DbUtil.getConnection();
	}
	public void close() throws Exception {
		if(con != null)
			con.close();
	}
}
