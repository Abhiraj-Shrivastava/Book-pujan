import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import AdminLogin from './Components/Administrator/Login/AdminLogin';
import DashBoard from './Components/Administrator/Login/DashBoard';
import Home from './Components/UserInterface/Home';
import PujanCategory from './Components/UserInterface/PujanCategory';
import SubPujan from './Components/UserInterface/SubPujan';
import DateAndSlot from './Components/UserInterface/DateAndSlot';
import Details from './Components/UserInterface/Details';
import Footer from './Components/UserInterface/MyComponent/Footer';
import TimeSlotPicker from './Components/UserInterface/appoitn';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div >
    <HashRouter >
      <Routes>

           
              
              
              <Route element={<AdminLogin/>} path="/adminlogin" />
              <Route path="/dashboard/*" element={<DashBoard/>} />
              <Route element={<Home/>} path="/" />
              <Route element={<PujanCategory/>} path="/pujanCategory" />
              <Route element={<SubPujan/>} path="/pujansubCategory" />
              <Route element={<DateAndSlot/>} path="/Tithi" />
              <Route element={<Details/>} path="/details" />
           
      </Routes>
    </HashRouter>
    
    </div>
  );
}

export default App;
