package com.springReact

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.security.access.prepost.PreAuthorize;

interface EmployeeRepository extends CrudRepository<Employee,Long> {



    void delete(Long aLong);


    List<Employee> findAll();

    Employee findOne(Long id);

    Employee save(Employee persisted);
    Employee saveAndFlush(Employee persisted);

}
