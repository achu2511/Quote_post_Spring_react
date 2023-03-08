package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class model {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String quoteword;
	private String name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getQuoteword() {
		return quoteword;
	}
	public void setQuoteword(String quoteword) {
		this.quoteword = quoteword;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public model(int id, String quoteword, String name) {
		super();
		this.id = id;
		this.quoteword = quoteword;
		this.name = name;
	}
	public model() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
