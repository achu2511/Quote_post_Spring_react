package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ApiService {
	
	@Autowired
	Repo rep;
	
	public String updatedetails(model st) {
		rep.save(st);
		return "updated";
	}
	
	public String delStudent(int id){
		
		rep.deleteById(id);
		return "deleted";
	}
}
