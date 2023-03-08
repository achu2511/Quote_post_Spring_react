
import './App.scss';

import { GetAllQ } from './components/allquote';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import { EntryPage } from './components/login';
import { GetAllQuotes } from './components/entire_db';
import { Postquote } from './components/post_quote';
import { Upd } from './components/uptquote';
import QuoteDel from './components/delete';



function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EntryPage></EntryPage>} />
    <Route path="/Home" element={<GetAllQ></GetAllQ>}></Route>
    <Route path="/Entire" element={<GetAllQuotes/>}></Route>
    <Route path="/Update" element={<Upd/>}></Route>
    <Route path='/create' element={<Postquote/>} />
    <Route path='/Delete' element={<QuoteDel/>} />
  </Routes>
  </BrowserRouter>


    
  );
}

export default App;
