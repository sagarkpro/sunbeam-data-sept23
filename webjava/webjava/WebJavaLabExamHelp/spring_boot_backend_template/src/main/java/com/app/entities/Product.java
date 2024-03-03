package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Past;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//Product has the following attributes: product_id(Integer),product_name(String),
//description(String),product_quantity(int),price(double),category(Enum),provider_id(int)FK,
//inStock(boolean),production_date(Date)

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class Product extends BaseEntity{
	@Length(min = 5)
	private String productName;
	private String description;
	private int quantity;
	private double price;
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	@ManyToOne
	@JoinColumn(name = "provider_id")
	private User provider;
	
	
	private boolean inStock;
	
	@Past
	private LocalDate productionDate;
	
	
}






