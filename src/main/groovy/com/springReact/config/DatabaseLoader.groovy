package com.springReact.config
//package com.springReact


import com.springReact.model.Employee
import com.springReact.model.Role
import com.springReact.model.User
import com.springReact.repository.EmployeeRepository
import com.springReact.repository.RoleRepository
import com.springReact.repository.UserRepository
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
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Autowired
    MongoOperations mongoOperations;
    @Autowired
     DatabaseLoader(EmployeeRepository repository,UserRepository userRepository,RoleRepository roleRepository){
        this.repository = repository;
        this.userRepository=userRepository;
        this.roleRepository=roleRepository;
    }

    @Override
    void run(String... strings) throws Exception {
        System.out.println("bootstaping data");
        Role role1= new Role("user_role");
        roleRepository.save(role1);
        User user1= new User("regadmin","password","password",role1)
        userRepository.save(user1);
        this.repository.save(new Employee("Joe Biden", 45));
        this.repository.save(new Employee("President Obama", 54));
        this.repository.save(new Employee("Crystal Mac", 34));
        this.repository.save(new Employee("James Henry", 33));
    }
}
