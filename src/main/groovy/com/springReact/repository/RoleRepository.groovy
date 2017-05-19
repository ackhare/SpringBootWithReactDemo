package com.springReact.repository

import com.springReact.model.Role
import com.springReact.model.User
import org.springframework.data.repository.CrudRepository

/**
 * Created by chetan on 15/5/17.
 */
public interface RoleRepository extends CrudRepository<Role, String> {
    Role findByName(String name);
}
