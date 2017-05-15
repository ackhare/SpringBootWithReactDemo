package com.springReact.repository

import com.springReact.model.User
import org.springframework.data.repository.CrudRepository

/**
 * Created by chetan on 15/5/17.
 */
public interface UserRepository extends CrudRepository<User, String> {
    User findByUsername(String username);
}