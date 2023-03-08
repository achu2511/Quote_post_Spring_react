import { useEffect,useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
import Nav from "./nav";

export function GetAllQ(){
    const [quotes, setQuotes] = useState([]);
 
    axios.get('http://localhost:8080/get')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });


    return (
        <div>
            <Nav/>
            <div className="home-first">
                <h1 className="home-head">'Quotes'</h1>
                <p className="home-head-txt">Quotes can help generate ideas within brainstorming, which can influence the ideas within the piece. They can send you in new directions by presenting the ideas of others.</p>
            </div>



            <div className="home-display">
                {quotes.map(quote => (
                        <div key={quote.id} className="quote-box">
                            <h2 className="quote-word">" {quote.quoteword} "</h2>

                            <p className="author">-{quote.name}</p>
                        </div>

                ))};
            </div>
            
        </div>

    );
}