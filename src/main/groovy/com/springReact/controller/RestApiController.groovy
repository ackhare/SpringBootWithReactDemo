package com.springReact.controller

import com.springReact.repository.EmployeeRepository
import org.apache.tomcat.util.net.openssl.ciphers.Authentication
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.RepositoryRestController
import org.slf4j.Logger;
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by chetan on 13/5/17.
 */
@RepositoryRestController
class RestApiController {
//    //  private final ScannerRepository repository;
//    @Autowired
//    EmployeeRepository repository
//
//    private final Logger logger = LoggerFactory.getLogger(RestApiController.class);

    @RequestMapping(method = RequestMethod.GET,value = "/isLogin/")
    public @ResponseBody
    ResponseEntity<?> isLogin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication().isAuthenticated();
        println authentication.name();
        return ResponseEntity.ok(authentication.name());
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
