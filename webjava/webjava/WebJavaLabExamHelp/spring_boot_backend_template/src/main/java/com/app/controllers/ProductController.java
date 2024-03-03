package com.app.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserDao;
import com.app.entities.Product;
import com.app.services.ProductService;
import com.app.services.UserService;


@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@Autowired
	private UserDao userDao;
	
	@PostMapping("/{uid}")
	public ResponseEntity<?> addProduct(@PathVariable Integer uid, @RequestBody @Validated Product p){
		return service.addProduct(uid, p); 
	}
	
	@GetMapping
	public List<Product> getAll(){
		return service.getAll();
	}
	
	@GetMapping("/{uid}")
	public List<Product> getProductByVendor(Integer uid){
		return service.getProductByVendor(userDao.findById(uid).orElseThrow());
	}
	
	
	
	@PutMapping("/{pid}")
	public ResponseEntity<?> updateProduct(@RequestBody @Validated Product p){
		return service.updateProduct(p);
	}
}
