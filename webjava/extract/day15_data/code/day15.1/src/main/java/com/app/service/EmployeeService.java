package com.app.service;

import java.util.List;

import com.app.pojos.Employee;

public interface EmployeeService {
//add a method to get list of emps for specific dept
	List<Employee> getEmpsByDepartment(Long deptId);

	String deleteEmpDetails(Long deptId, Long empId);

	String updateEmpDetails(Long empId, double salary);

	String addNewEmp(Long deptId, Employee emp);

	Employee authenticateEmp(String em, String pass);
}
