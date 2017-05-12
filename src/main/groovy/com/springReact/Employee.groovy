package com.springReact

/**
 * Created by chetan on 12/5/17.
 */
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Employee implements Serializable {

    @Id
    @GeneratedValue
    Long id;
    String name;
    int age;



    Employee() {}

    Employee(String name, int age) {
        this.name = name;
        this.age = age;
        //this.years = years;
    }
}
