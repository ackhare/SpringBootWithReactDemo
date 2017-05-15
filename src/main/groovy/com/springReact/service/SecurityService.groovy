package com.springReact.service

/**
 * Created by chetan on 15/5/17.
 */
interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}
