package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class User extends BaseEntity {
	private String userName;
	private String email;
	private String phoneno;
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	private LocalDate regDate;
}
//attributes:user_id(Integer),user_name(String),email(String),
//phoneno(String),password(String),role(Enum-PROVIDER,CUSTOMER),regDate(Date)