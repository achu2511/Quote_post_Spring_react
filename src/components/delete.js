import React, { useState } from 'react';
import axios from 'axios';
import Nav from './nav';
import{Link,useNavigate} from 'react-router-dom';



const QuoteDel = () => {
  const [id, setId] = useState('');
   
  
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/del?id=${id}`)
      .then(response => {
        alert('Quote deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete Quote.');
        console.error(error);
      });
  };

  return (
    <div>
        <Nav></Nav>
      <h1 className='post-txt'>Delete Quote</h1>
      <div className='del-container'>

      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input className='post-ip kl'
            type="text"
            id="id"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </div>
         
        <Link to="/Home" ><button type="button" className='post-btn kp' onClick={handleDelete}>Delete</button></Link>
      </form>
              
      </div>
    </div>
  );
};

export default QuoteDel;