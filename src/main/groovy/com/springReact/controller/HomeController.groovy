package com.springReact.controller

import com.springReact.repository.EmployeeRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody

/**
 * Created by chetan on 12/5/17.
 */
@Controller
class HomeController {
    @Autowired
    EmployeeRepository studentRepository
    @RequestMapping(value = "/")
    public String home() {
        return "index";
    }

}
