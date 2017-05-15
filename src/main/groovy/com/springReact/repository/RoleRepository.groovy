package com.springReact.repository

import com.springReact.model.Role
import org.springframework.data.repository.CrudRepository

/**
 * Created by chetan on 15/5/17.
 */
public interface RoleRepository extends CrudRepository<Role, String> {
}
