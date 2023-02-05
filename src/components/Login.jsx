import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbarlogin from './Navbarlogin'
import Admindashboard from './Admindashboard'
import Employee from './Employee'
const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const userAuthentication=()=>{
        const userData={
            "email":email,
            "password":password

        }
        console.log(userData);
        axios.post('http://localhost:3003/login1',userData)
        .then((response)=>{
            console.log(response.data)
            let position=response.data.data[0].position;
            console.log(position);
            
            
            if(response.data.status=="Success" || position=="Admin"){
                 console.log("Admin")
                 navigate('/admin');
            }
            // else if(response.data.length>0){
            //    console.log("employee")
            //     navigate('/employee');
            // }
            // else{
            //     alert("Invalid")
            // }
            // else{
            //    // console.log("employee")
            //    navigate('/employee');
            // }
        })
    }
    // const [user,setUser]=useState({
    //     email:"",password:""
        

    // })
    // let name,value;
    // const handleInputs=(e)=>{
        
    //     //e.preventDefault()
    //     console.log(e.target.value);
    //     name=e.target.name;
    //     value=e.target.value;
    //     setUser({...user,[name]:value});

    // }
    const loginEmployee=()=>{
        console.log("Login")
    }
  return (
    
    <div>
        <Navbarlogin/>
            <div className="container">
                <div className="row emp-add bg-3">
                    <h1 >LOGIN</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 emp">
                            <form method="" className="form-horizontal">
                                
                               
                                
                                
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" placeholder=' ' name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Password</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' ' name="password"  onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">           </label>
                                    <div className="col-sm-offset-4 col-sm-8">
                                        {/* <button type="submit"  onClick={employeeAdd} >Add</button> */}
                                    {/* <input type="button">ADD</input> */}
                                    <button type="button" onClick={userAuthentication}>LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login