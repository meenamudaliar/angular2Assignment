package com.property.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property,Long> {
	public List<Property> findAll();

}
