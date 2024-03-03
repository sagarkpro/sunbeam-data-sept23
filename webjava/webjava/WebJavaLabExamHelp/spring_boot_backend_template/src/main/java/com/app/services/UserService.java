package com.app.services;

import org.springframework.http.ResponseEntity;

import com.app.entities.User;

public interface UserService {
	public ResponseEntity<?> deleteUser(Integer uid);
	
}
