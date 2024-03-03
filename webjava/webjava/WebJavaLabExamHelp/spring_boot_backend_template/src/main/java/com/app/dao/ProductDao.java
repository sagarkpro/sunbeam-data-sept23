package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Product;
import com.app.entities.User;

public interface ProductDao extends JpaRepository<Product, Integer> {
	public List<Product> findByProvider(User uid);
}
