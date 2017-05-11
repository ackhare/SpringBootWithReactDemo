package com.springReact

//import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Employee implements Serializable {

	private @Id @GeneratedValue Long id;
	private String name;
	private int age;
	//private int years;


	Employee() {}

	Employee(String name, int age) {
		this.name = name;
		this.age = age;
		//this.years = years;
	}

	String getName() {
		return name
	}

	void setName(String name) {
		this.name = name
	}

	int getAge() {
		return age
	}

	void setAge(int age) {
		this.age = age
	}
}
