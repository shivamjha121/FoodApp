import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import Modal from '../Modal'
import Cart from '../screens/Cart';
import { useCart } from "./Contextreducer";

function Navbar(props) {
  const [cartView, setCartView] = useState(false)
  let data=useCart();
  const navigate = useNavigate()
  const handlelogout = () => {
    localStorage.removeItem('authtoken');
    navigate("/login")
  }
  const loadCart = () => {
    setCartView(true)
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" href="#">
            SkFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ marginLeft: "150px" }}></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <Link className="nav-link active fs-5 " aria-current="page" to="/">
                Home
              </Link>
              {(localStorage.getItem("authtoken")) ?
                <li>
                  <Link className="nav-link fs-5 active" to="/myOrder">
                    My orders
                  </Link>
                </li>
                : " "}

            </div>
            <div class="d-flex justify-content-centre">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-warning text-white bg-warning" type="submit">Search</button>
            </div>

          </div>
          {(!localStorage.getItem("authtoken")) ?
            <div>
              <Link className="btn bg-white text-success mx-1" to="/login ">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser ">
                Signup
              </Link>
            </div>
            :
            <div>
              <div className="btn tex-white mx-2 fs-2"  style={{ marginBottom: "8px" }} onClick={loadCart}>
                <BsCart3 />
                <Badge pill bg='danger' className="fs-6">{data.length}</Badge>

              </div>
             

              {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
              <div className="btn bg-white text-danger mx-2 " onClick={handlelogout}>
                Logout
              </div>
            </div>
          }
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
