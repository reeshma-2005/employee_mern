import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbarlogin from './Navbarlogin'
const Employee = () => {

    var [employeeList, setEmployeeList] = useState([])

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    useEffect(
        () => {
            displayEmployee();
        },[]
      );
    const displayEmployee=()=>{
        const userData={
            "email":'',
            "password":''

        }
        console.log(userData)
        axios.post('http://localhost:3003/employeelist',userData)
        .then((response)=>{
            console.log(response.data)
            setEmployeeList(response.data)
        })
        .catch(
            (error)=>{
                console.log("The error loading data"+error)
            }
        )
    }
   
    
  return (
    
    <div>
        <Navbarlogin/>
        <div className='container'>
          <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table table-success table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Position</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeList.map(
                        (value, index) => {
                          return <tr>
                            <td>{value._id}</td>
                            <td>{value.name}</td>
                            <td>{value.location}</td>
                            <td>{value.position}</td>
                            <td>{value.email}</td>
                          </tr>
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Employee