package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin
public class ApiController {
	@Autowired
	Repo rep;
	
	@Autowired
	ApiService ser;
	
	@GetMapping("/get")
	List<model> getList(){
		return rep.findAll();
	}
	
	@PostMapping("/post")
	public model create (@RequestBody model a) {
		return rep.save(a);
	} 
	
	@PutMapping("/update")
	public String updatw(@RequestBody model st) {
		return ser.updatedetails(st);
	}
	
	@DeleteMapping("/del")
	public String delete(@RequestParam int id) {
		return ser.delStudent(id);
	}
}
