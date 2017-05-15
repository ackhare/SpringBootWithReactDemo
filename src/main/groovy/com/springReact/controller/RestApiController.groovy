package com.springReact.controller

import com.springReact.repository.EmployeeRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.RepositoryRestController
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by chetan on 13/5/17.
 */
@RepositoryRestController
class RestApiController {
    //  private final ScannerRepository repository;
    @Autowired
    EmployeeRepository repository

    private final Logger logger = LoggerFactory.getLogger(RestApiController.class);

//    @RequestMapping(method = RequestMethod.GET)
//    public @ResponseBody ResponseEntity<?> getProducers() {
//        println "mmmmmmmmmmmmmmmmmmmmmmmmmm"
//        logger.info("nknkkknknkkkkkn");
//        return  ResponseEntity.ok("mmmm") ;
//    }
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
