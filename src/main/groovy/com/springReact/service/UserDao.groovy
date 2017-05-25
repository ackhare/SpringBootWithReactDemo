package com.springReact.service

import com.springReact.model.User
import com.springReact.repository.RoleRepository
import com.springReact.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * Created by chetan on 25/5/17.
 */
@Service
@Transactional
class UserDao {
    @Autowired
    UserRepository userRepository


    @Transactional
    public User saveUser(User user) {
        try {
            userRepository.save(user);
        }
        catch (Exception e) {
            println e
        }
    }

}
