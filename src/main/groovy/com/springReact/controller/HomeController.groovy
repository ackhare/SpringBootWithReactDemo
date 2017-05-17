package com.springReact.controller

import com.springReact.repository.EmployeeRepository
import org.apache.tomcat.util.net.openssl.ciphers.Authentication
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.logout.CookieClearingLogoutHandler
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler
import org.springframework.security.web.authentication.rememberme.AbstractRememberMeServices
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * Created by chetan on 12/5/17.
 */
@Controller
class HomeController {
    @Autowired
    EmployeeRepository studentRepository

//    @RequestMapping(value = "/")
//    public String home() {
//        return "index";
//    }
////
////    @RequestMapping(value = "/customLogout",method = RequestMethod.GET)
//////    public void logout(HttpServletRequest request, HttpServletResponse response) {
////        println "mmmmmmmm"
////        CookieClearingLogoutHandler cookieClearingLogoutHandler = new CookieClearingLogoutHandler(AbstractRememberMeServices.SPRING_SECURITY_REMEMBER_ME_COOKIE_KEY);
////        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();
////        cookieClearingLogoutHandler.logout(request, response, null);
////        securityContextLogoutHandler.logout(request, response, null);
////    }
//
//
//    @RequestMapping("/login")
//    public String login() {
//        return "login";
//    }
//
//    @RequestMapping("/login-error")
//    public String loginError(Model model) {
//        model.addAttribute("loginError", true);
//        return "login";
//    }


    @RequestMapping("/")
    public String root() {
        return "index";
    }


//    @RequestMapping("/user/index")
//    public String userIndex() {
//        return "user/index";
//    }

//    @RequestMapping("/login")
//    public String login() {
//        return "index";
//    }
//
//    @RequestMapping("/login-error")
//    public String loginError(Model model) {
//        model.addAttribute("loginError", true);
//        return "index";
//    }
}