package com.springReact.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by chetan on 15/5/17.
 */
@Document

public class User {

    @Id
    private String id;
    private String username;
    private String password;
    private String passwordConfirm;

    Role getRole() {
        return role
    }

    void setRole(Role role) {
        this.role = role
    }
    @DBRef
    private Role role;


    //@GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //@Transient
    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }

    User(String username, String password, String passwordConfirm, Role role) {
        this.username = username
        this.password = password
        this.passwordConfirm = passwordConfirm
        this.role = role
    }
}