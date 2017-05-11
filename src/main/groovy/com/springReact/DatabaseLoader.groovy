package com.springReact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
//To load data, create a CommandLineRunner implementation that uses the
// repository to create new records in the database.
@Component
class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
     DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    void run(String... strings) throws Exception {
        System.out.println("bootstaping data");
        this.repository.save(new Employee("Joe Biden", 45));
        this.repository.save(new Employee("President Obama", 54));
        this.repository.save(new Employee("Crystal Mac", 34));
        this.repository.save(new Employee("James Henry", 33));
    }
}
