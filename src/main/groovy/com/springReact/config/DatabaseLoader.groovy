package com.springReact.config
//package com.springReact


import com.springReact.model.Employee
import com.springReact.repository.EmployeeRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.stereotype.Component


/**
 * Created by chetan on 12/5/17.
 */
@Component
class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;
    @Autowired
    MongoOperations mongoOperations;
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
