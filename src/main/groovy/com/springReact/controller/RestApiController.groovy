package com.springReact.controller

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import com.springReact.Enums.Roles
import com.springReact.ModelConfig
import com.springReact.model.Role
import com.springReact.model.User
import com.springReact.repository.EmployeeRepository
import com.springReact.repository.RoleRepository
import com.springReact.repository.UserRepository
import org.apache.tomcat.util.net.openssl.ciphers.Authentication
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.RepositoryRestController
import org.slf4j.Logger;
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody

//import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chetan on 13/5/17.
 */

@RestController
@RequestMapping("/api/")
class RestApiController {
//    //  private final ScannerRepository repository;
    @Autowired
    ModelConfig modelConfig
    @Autowired
    UserRepository userRepository
    @Autowired
    RoleRepository roleRepository


//
//    private final Logger logger = LoggerFactory.getLogger(RestApiController.class);

    @RequestMapping(method = RequestMethod.GET, value = "isLogin")
    public def isLogin() {
        def authentication = SecurityContextHolder.getContext().getAuthentication();
        println authentication?.principal;
        return authentication?.principal;

    }
/*
@RequestBody - Covert Json object to java
@ResponseBody- convert Java object to json
 */
    @RequestMapping(method = RequestMethod.POST, value = "register")
    public @ResponseBody def register(@RequestBody User user) {
println user
        ObjectMapper mapper = new ObjectMapper();
            String username =user.username;
       String password = user.password;
        String confirm_password = user.passwordConfirm;
        String email=user.email
        String firstName=user.firstName
        String lastName=user.lastName
       // Role role= new Role('role_user');
        Role role=roleRepository.findByName('user_role')
        User new_user= new User(username,password,confirm_password,email,firstName,lastName,role);

        println user;
        println modelConfig.new_role();
        println "mmmmmmmmmmmmmm"

        println "vvvvvvvvvvvvvvvvv"
        new_user=userRepository.save(new_user);

        JsonNode rootNode = mapper.createObjectNode();

        JsonNode childNode1 = mapper.createObjectNode();
        ((ObjectNode) childNode1).put("name", "${new_user.firstName+" "+new_user.lastName}");
        ((ObjectNode) rootNode).set("obj1", childNode1);





        String jsonString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(rootNode);
        System.out.println(jsonString);
        return jsonString;


    }
// @RequestMapping(method = RequestMethod.GET, value = "/api/employees/")
//    public @ResponseBody ResponseEntity<?> getProducers() {
// List<String> producers = repository.listProducers();

//
// do some intermediate processing, logging, etc. with the producers
//

//        Resources<String> resources = new Resources<String>(producers);
//
//        resources.add(linkTo(methodOn(ScannerController.class).getProducers()).withSelfRel());

// add other links as needed

//        return ResponseEntity.ok();
//    }

//    @RequestMapping(value = "/employees/{id}", method = RequestMethod.DELETE)
//    public void  delete(@PathVariable BigInteger id) {
//
//        println "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
//println id;
//         println repository.findOne(id)
//
//        logger.info("nknkkknknkkkkkn");
////        return  ResponseEntity.ok("mmmmm") ;
//    }

}
