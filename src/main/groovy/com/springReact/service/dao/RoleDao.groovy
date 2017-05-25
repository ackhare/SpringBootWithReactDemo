package com.springReact.service.dao

import com.springReact.model.Role
import com.springReact.repository.RoleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * Created by chetan on 25/5/17.
 */
@Service
@Transactional
class RoleDao {
    @Autowired
    RoleRepository roleRepository

      @Transactional
    public Role saveUser(String rolesd) {
          //roleRepository.save(employee);
    }
    public Role findRole(String roles) {
        //roleRepository.save(employee);
    }
}
