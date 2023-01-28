import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Ticket from './pages/Ticket';
import { Error } from './pages/Error';
import TicketDetail from './pages/TicketDetail';
import ZoneDetail from './pages/ZoneDetail';
import Attraction from './pages/Attraction';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Suspense } from 'react';
import Zone from './pages/Zone';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Register from './pages/Register';
import Test from './pages/test';
function App() {
  return (
    <>
      {/* <Suspense fallback={null}> */}
        <BrowserRouter>
          <ScrollToTop/> {/*go to top when change route*/}
          <ToastContainer/> 
          <Routes>
            <Route path=''   element={<HomePage/>}></Route>
            <Route path="/homepage" element={<HomePage/>}></Route>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/attraction" element={<Attraction/>}/>
            <Route path="/ticket" element={<Ticket/>}/>
            <Route path="/zone" element={<Zone/>}/>
            <Route path="/zone/:id" element={<ZoneDetail/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/attraction/:id" element={<TicketDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      {/* </Suspense> */}
      
      


      
    </>
  );
}

export default App;
