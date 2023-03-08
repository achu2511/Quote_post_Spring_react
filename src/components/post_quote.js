import {useState} from "react";
import Nav from "./nav";


export function Postquote(){
    const [quoteword, setQuoteword] = useState('');
    const [name, setName] = useState('');
  

    const handleSubmit = (event) => {

        const data = {
          quoteword: quoteword,
          name: name
        };
    


    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    };

    return(
        <>
            <Nav/>
            <h2 className="post-txt">Create Your Own Quote</h2>
            <div className="post-container">
                <form onSubmit={handleSubmit}>
                    <label for="fname">Your Quote:</label><br/>
                    <input className="post-ip" type="text" id="fquote" name="yquote" value={quoteword} onChange={event => setQuoteword(event.target.value)}/><br/>
                    <label for="lname">Your name:</label><br/>
                    <input className="post-ip" type="text" id="yname" name="yname" value={name} onChange={event => setName(event.target.value)}/><br/>
                    <button type="submit"  className="post-btn">Submit</button>
                </form>
            </div>
        </>
    );
}