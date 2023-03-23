import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { Error } from './pages/Error';
import TicketDetail from './pages/TicketDetail';
import ZoneDetail from './pages/ZoneDetail';
import Attraction from './pages/Attraction';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Zone from './pages/Zone';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Register from './pages/Register';
import HotelEatery from './pages/HotelEatery';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Posts from "./pages/Posts";
import Orders from './pages/Order';
import AdminRoute from './utils/AdminRoute';

function App() {
  return (
    <>
      {/* <Suspense fallback={null}> */}
        <BrowserRouter>
          <ScrollToTop/> {/*go to top when change route*/}
          <ToastContainer/> 
          <NavBar/>
            <Routes>
              
              <Route path=''   element={<HomePage/>}></Route>
              <Route path="/homepage" element={<HomePage/>}></Route>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/attraction" element={<Attraction/>}/>
              <Route path="/zone" element={<Zone/>}/>
              <Route path="/zone/:id" element={<ZoneDetail/>}/>
              <Route path="/attraction/:id" element={<TicketDetail/>}/>
              <Route path="/todo/:id" element={<TicketDetail/>}/>
              <Route path="/tostay/:id" element={<HotelEatery/>}/>
              <Route path="/toeat/:id" element={<HotelEatery/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile/:email" element={<Profile/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path="/*" element={<Error/>}/>
              <Route path='/search' element={<Search/>}></Route>

              {/* Admin */}
              <Route element={<AdminRoute/>}>
                <Route path='/posts' element={<Posts/>}></Route>

                
                <Route path='/orders' element={<Orders/>}></Route>
              </Route>
              
              
            </Routes>
            <Footer/>
        </BrowserRouter>
      {/* </Suspense> */}
      
      


      
    </>
  );
}

export default App;
