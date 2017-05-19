package com.springReact

import com.springReact.model.Role
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * Created by chetan on 19/5/17.
 */
@Configuration
class ModelConfig {

    @Bean
    Role new_role()
    {
        println "created riole"
        return new Role("role_user");
    }
}
