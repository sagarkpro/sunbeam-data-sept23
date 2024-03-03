package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;


@Service
public class UserSeviceImpl implements UserService {

	@Autowired
	private UserDao dao;
	
	@Override
	public ResponseEntity<?> deleteUser(Integer uid) {
		dao.deleteById(uid);
		return new ResponseEntity<>(HttpStatus.GONE);
	}
	
}
