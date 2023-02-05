import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import Employeeform from './Employeeform';
import Login from './Login';
const Navbarlogin = () => {
  
  return (
    <div>
      <div className="container">
        <div className="row bg-3">
          <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div class="container">
                <a class="navbar-brand" href="/">Employee</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/login">LOGIN</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/newemployee">New Employee</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbarlogin