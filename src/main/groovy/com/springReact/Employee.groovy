package com.springReact

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by chetan on 12/5/17.
 */

@Document
class Employee {

    @Id
    // @GeneratedValue
    String id;
    String name;
    int age;


    Employee() {}

    Employee(String name, int age) {
        this.name = name;
        this.age = age;
        //this.years = years;
    }
}
