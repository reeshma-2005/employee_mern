import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Navbarlogin from './Navbarlogin'
import './style.css'
import axios from 'axios'
import Login from './Login'
const Employeeform = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",location:"",position:"",salary:"",email:"",password:""
        

    })
    let name,value;
    const handleInputs=(e)=>{
        
        //e.preventDefault()
        console.log(e.target.value);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});

    }


    // const handleInputs= (event)=>{
    //     //event.preventDefault()
    //     console.log(event.target.value);
    //     const {name,value}=event.target
    //     setUser(
    //       (previousState)=>({
    //         ...previousState,
    //         [name]:value
    //       })
    //     )
    //   }

      const employeeAdd=()=>{
           console.log(user);
           console.log("Hello");
            axios.post('http://localhost:3003/employeeadd',user)
            .then((response)=>{
                console.log(response.data);
                if (response.data.status === "Success") {
                    setUser({
                        name: '',
                        emailid: '',
                        password: '',
                        location: '',
                        designation: '',
                        salary: ''
                    })                

                }
            })
            .catch((error) => {
                console.log(error)
            })
            navigate("/employee")   
      }
  return (
    <div>
            <Navbarlogin />
            
            <div className="container">
                <div className="row emp-add bg-3">
                    <h1 >Add Employee</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 emp">
                            <form method="" className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="name"placeholder='' value={user.name} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Location</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="location"placeholder='' value={user.location} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Position</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder='' name="position" value={user.position} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Salary</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' ' name="salary" value={user.salary} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" placeholder=' ' name="email" value={user.email} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Password</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' ' name="password" value={user.password} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">           </label>
                                    <div className="col-sm-offset-4 col-sm-8">
                                        {/* <button type="submit"  onClick={employeeAdd} >Add</button> */}
                                    {/* <input type="button">ADD</input> */}
                                    <button type="button" onClick={employeeAdd}>ADD</button>
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

export default Employeeform