package com.springReact

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by chetan on 3/5/17.
// */
@Controller
class HomeController {
    @Autowired
    EmployeeRepository studentRepository
    @RequestMapping(value = "/")
    public String index() {
        println "llllllllllllllllllllllll"
        println studentRepository.findAll()
        return "index";
    }
}
