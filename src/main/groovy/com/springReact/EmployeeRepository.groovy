package com.springReact

/**
 * Created by chetan on 12/5/17.
 */

import org.springframework.data.repository.CrudRepository;
//import org.springframework.security.access.prepost.PreAuthorize;

interface EmployeeRepository extends CrudRepository<Employee,BigInteger> {



   // void delete(Long aLong);
//
//
//    List<Employee> findAll();
//
//    Employee findOne(Long id);
//
//    Employee save(Employee persisted);
//    Employee saveAndFlush(Employee persisted);

}
