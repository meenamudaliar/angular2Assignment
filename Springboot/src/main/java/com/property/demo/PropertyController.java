package com.property.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="*")
@RestController
public class PropertyController {
@Autowired
PropertyRepository propertyRepo;
@GetMapping("/property")
public List<Property> getAllProperty(){
	return propertyRepo.findAll();
	
}
@PostMapping("/property")
public Property createProperty(@RequestBody Property property) {
	return propertyRepo.save(property);
}


}
