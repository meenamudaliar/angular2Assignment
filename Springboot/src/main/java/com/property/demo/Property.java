package com.property.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="property")
public class Property {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private int id;
	@Column(name="property_name")
	private String name;
	@Column(name="description")
	private String description;
	@Column(name="size")
	private int size;
	public Property() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Property(int id, String name, String description, int size) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.size = size;
	}
	
	
public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}


}
