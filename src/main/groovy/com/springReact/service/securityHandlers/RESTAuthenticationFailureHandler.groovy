package com.springReact.service.securityHandlers

/**
 * Created by chetan on 17/5/17.
 */


import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class RESTAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        println "RESTAuthenticationFailureHandler start"
        println request
        println response
        println exception
        println "RESTAuthenticationFailureHandler end"
        super.onAuthenticationFailure(request, response, exception);
    }
}