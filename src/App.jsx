import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About'
import Ticket from './pages/Ticket';
import { Error } from './pages/Error';
import TicketDetail from './pages/TicketDetail';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/ticket-detail" element={<TicketDetail/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>


      
    </>
  );
}

export default App;
