import React from "react";
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand" style={{fontFamily: "'Rochester', cursive"}}>The Mulberry Patch</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={"#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seasonal Cookies
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to={"/NewYearsCookies"}>New Years</Link></li>
                  <li><Link className="dropdown-item" to={"/ValentinesCookies"}>Valentines Day</Link></li>
                  <li><Link className="dropdown-item" to={"/StPaddyCookies"}>St. Patrick's Day</Link></li>
                  <li><Link className="dropdown-item" to={"/EasterCookies"}>Easter</Link></li>
                  <li><Link className="dropdown-item" to={"/MothersDayCookie"}>Mother's Day</Link></li>
                  <li><Link className="dropdown-item" to={"/FathersDayCookies"}>Father's Day</Link></li>
                  <li><Link className="dropdown-item" to={"/FourthJulyCookie"}>4th of July</Link></li>
                  <li><Link className="dropdown-item" to={"/HolloweenCookies"}>Halloween</Link></li>
                  <li><Link className="dropdown-item" to={"/ThanksgivingCookies"}>Thanksgiving</Link></li>
                  <li><Link className="dropdown-item" to={"/SpecialtyCookies"}>Custom Events</Link></li>
                </ul>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <Link className="nav-link" style={{ width: "140px" }} to={"/SpecialtyCookies"}>Specialty Cookies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Orders"}>Orders</Link>
              </li>
            </ul>
            <div style={{ width: "450px" }}>
              <form className="d-flex mx-5">
                <input className="form-control mx-3 " type="search" placeholder="Search Cookies" aria-label="Search"/>
                <button className="btn btn-outline-success " type="submit">Search</button>
              </form>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/login"}>Login</Link> 
              </li> 
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/register"}>Register</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;