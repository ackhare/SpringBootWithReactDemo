package com.springReact.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by chetan on 15/5/17.
 */
@Document
public class Role {
    @Id
    private String id;
    private String name;




    //@GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
//     @DBRef
//     private Set<User> users;
    Role(String name) {
        this.name = name
    }
//
//    // @ManyToMany(mappedBy = "roles")
//    public Set<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(Set<User> users) {
//        this.users = users;
//    }
}
