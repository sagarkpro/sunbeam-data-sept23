package com.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.entities.Product;
import com.app.entities.User;


public interface ProductService {
	public ResponseEntity<?> addProduct(Integer uid, Product p);
	public List<Product> getAll();
	
	public List<Product> getProductByVendor(User uid);
	public ResponseEntity<?> updateProduct(Product p);
}
