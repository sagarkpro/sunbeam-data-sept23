package com.app.services;

import java.util.List;

import javax.validation.Payload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.dao.ProductDao;
import com.app.dao.UserDao;
import com.app.entities.Product;
import com.app.entities.User;


@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductDao dao;
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public ResponseEntity<?> addProduct(Integer uid, Product p) {
		p.setProvider(userDao.findById(uid).orElseThrow());
		dao.save(p);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@Override
	public List<Product> getAll() {
		return dao.findAll();
	}

	@Override
	public List<Product> getProductByVendor(User uid) {
		return dao.findByProvider(uid);
	}

	@Override
	public ResponseEntity<?> updateProduct(Product p) {
		dao.save(p);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
