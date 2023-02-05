import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbarlogin from './components/Navbarlogin';
//import employeeform from './components/employeeform';
import Employeelist from './components/Employeelist';
import Employeeform from './components/Employeeform';
// import Mj from './components/Mj';
import Login from './components/Login';
import Admindashboard from './components/Admindashboard';
import Employee from './components/Employee';
import Edit from './components/Edit';
function App() {
  return (
     
    
    <div>
       
    <BrowserRouter>
      <Routes>
         <Route path='/' element ={<Navbarlogin/>} ></Route> 
         <Route path='/login' element ={<Login/>} ></Route> 
         
         <Route path='/employeelist1' element={<Employeelist/>}></Route>
         
        <Route path='/newemployee' element={<Employeeform/>}></Route>
        <Route path='/admin' element={<Admindashboard/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
