package com.springReact.controller

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import com.springReact.ModelConfig
import com.springReact.model.Role
import com.springReact.model.User
import com.springReact.repository.RoleRepository
import com.springReact.repository.UserRepository
import com.springReact.service.dao.UserDao
import groovyjarjarantlr.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.DuplicateKeyException
import org.springframework.security.core.context.SecurityContextHolder
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

    @Autowired
    UserDao userDao

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
    public @ResponseBody
    def register(@RequestBody User user) {

        ObjectMapper mapper = new ObjectMapper();
        String username = user.username;
        String password = user.password;
        String confirm_password = user.passwordConfirm;
        String email = user.email
        String firstName = user.firstName
        String lastName = user.lastName
        // Role role= new Role('role_user');
        JsonNode rootNode = mapper.createObjectNode();
        JsonNode childNode1 = mapper.createObjectNode();


        try {
            Role role = roleRepository.findByName('user_role')
            User new_user = new User(username, password, confirm_password, email, firstName, lastName, role);
            new_user = userDao.saveUser(new_user)
            ((ObjectNode) childNode1).put("name", "${new_user.firstName + " " + new_user.lastName}");
            ((ObjectNode) rootNode).set("obj1", childNode1);
            String jsonString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(rootNode);
            System.out.println(jsonString);
            return jsonString;
        }
        catch (DuplicateKeyException e) {
            println 'exception in rest api '
            println e.cause.properties.errorMessage.split('index:').last().split().first();
            ((ObjectNode) childNode1).put("error", "The " +e.cause.properties.errorMessage.split('index:').last().split().first()+ " is already taken")
            ((ObjectNode) rootNode).set("obj1", childNode1);
            println e.cause.properties.errorMessage.split('index:').last().split().last();
            //((ObjectNode) rootNode).set("obj1", childNode1);
            return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(rootNode);
            //println e.mostSpecificCause.dump()

            // println e.stackTrace
        }

    }

}
