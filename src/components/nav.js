
import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Q..</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to='/Home'>Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Entire'>Entire</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Update'>Update</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/create'>Create own Quote</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Delete'>Delete</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  );

}