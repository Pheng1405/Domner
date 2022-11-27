import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login';
import HomePage from './pages/HomePage';
import RoutNotFound from './pages/RoutNotFound';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/*" element={<RoutNotFound/>}/>
        </Routes>
      </BrowserRouter>


      
    </>
  );
}

export default App;
