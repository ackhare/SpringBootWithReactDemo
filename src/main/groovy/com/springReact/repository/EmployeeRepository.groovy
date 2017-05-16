package com.springReact.repository

import com.springReact.model.Employee

/**
 * Created by chetan on 12/5/17.
 */

import org.springframework.data.repository.CrudRepository;
//import org.springframework.security.access.prepost.PreAuthorize;

interface EmployeeRepository extends CrudRepository<Employee,String> {


}
