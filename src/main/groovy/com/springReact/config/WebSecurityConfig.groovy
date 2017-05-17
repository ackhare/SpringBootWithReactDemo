package com.springReact.config

import com.springReact.service.UserDetailsServiceImpl

////package com.springReact
////
/////**
//// * Created by chetan on 15/5/17.
//// */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.security.crypto.password.NoOpPasswordEncoder
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
		http
				.authorizeRequests()
				.antMatchers("/css/**", "/index").permitAll()
				.antMatchers("/user/**").hasRole("USER")
				.and()
				.formLogin().loginPage("/login").failureUrl("/login-error");
//		.formLogin().loginProcessingUrl('/')
//			.defaultSuccessUrl("/", true)
//			.permitAll()
//			.and()
//		.httpBasic()
//			.and()
//		.csrf().disable()
//		.logout()
//				.logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutUrl("/customLogout").logoutSuccessUrl("/");
    }
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.inMemoryAuthentication()
				.withUser("user").password("password").roles("USER");
	}
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService).passwordEncoder(NoOpPasswordEncoder.getInstance());
//    }


}