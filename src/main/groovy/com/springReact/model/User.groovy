package com.springReact.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by chetan on 15/5/17.
 */
@Document

public class User {
    String getFirstName() {
        return firstName
    }

    void setFirstName(String firstName) {
        this.firstName = firstName
    }

    String getLastName() {
        return lastName
    }

    void setLastName(String lastName) {
        this.lastName = lastName
    }
    @Id
    private String id;
    @Indexed(unique = true)
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private String passwordConfirm;
    @Indexed(unique = true)
    private String email;

    User() {
    }

    String getEmail() {
        return email

    }

    void setEmail(String email) {
        this.email = email
    }


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

    User(String username, String password, String passwordConfirm, String email,String firstName,String lastName,Role role) {
        this.username = username
        this.password = password
        this.passwordConfirm = passwordConfirm
        this.email = email
        this.firstName=firstName
        this.lastName=lastName
        this.role = role
    }
    User(String username, String password, String passwordConfirm, String email,Role role) {
        this.username = username
        this.password = password
        this.passwordConfirm = passwordConfirm
        this.email = email
        this.role = role
    }
    User(String username, String password, String passwordConfirm, Role role) {
        this.username = username
        this.password = password
        this.passwordConfirm = passwordConfirm
        this.role = role
    }
}