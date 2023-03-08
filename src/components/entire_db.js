import {useEffect,useState } from "react";
import axios from "axios";
import Nav from "./nav";

export function GetAllQuotes(){
    const [quotes, setQuotes] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/get')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Nav/>
            <h1 className="entire-txt">Stored Quotes</h1>
            <div className="entire-div">
                <table>
                    <thead>
                        <tr>
                            <th  className="entire-head l">Id</th>
                            <th  className="entire-head l pl">Quotes</th>
                            <th  className="entire-head l hl">name</th>
                        </tr>
                    </thead>
                    <tbody className="entire-cont">
                        {quotes.map(quote => (
                            <tr key={quote.id}>
                                <td  className="entire-head h">{quote.id}</td>
                                <td  className="entire-head h pl"> {quote.quoteword}</td>
                                <td  className="entire-head hl">{quote.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>       
            </div>
        </div>

    );
}