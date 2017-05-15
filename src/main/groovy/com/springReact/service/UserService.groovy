package com.springReact.service

import com.springReact.model.User

/**
 * Created by chetan on 15/5/17.
 */

interface UserService {
    void save(User user);

    User findByUsername(String username);
}
