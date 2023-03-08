import React, { useState} from "react";
import axios from "axios";
import Nav from "./nav";
// import './EmpUpdate.css';

export function Upd() {
  const [updated, setUpdated] = useState({
    id: "",
    quoteword:"",
    name: ""
  });

  const handleChange = (event) => {
    setUpdated({ ...updated, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {

    axios.put(`http://localhost:8080/update`, updated).then((res) => {
      console.log(res.data);
      setUpdated({ id: "",quoteword:"" ,name: ""});
    });
  };

  return (
    <div>
        <Nav/>
      <h1 className="update-txt">Update</h1>
      <div className="update-container">

      <form onSubmit={handleSubmit}>
        <label className="gap">
          ID:
          <input className="up-ip1 j" type="text" name="id" value={updated.id} onChange={handleChange} />
        </label><br/>
        <label className="gap">
          New Quote:
          <input className="up-ip2 j" type="text" name="quoteword" value={updated.quoteword} onChange={handleChange} />
        </label><br/>
        <label className="gap">
          Name:
          <input className="up-ip3 j" type="text" name="name" value={updated.name} onChange={handleChange} />
        </label><br/>
        
        
        <button type="submit" className="up-btn">Update</button>
      </form>
              
      </div>
    </div>
  );
}

