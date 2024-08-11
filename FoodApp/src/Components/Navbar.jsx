import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Badge from "react-bootstrap/Badge";
import { useCart } from "./CartProvider";
import Modal from "../Modal";
import Cart from "./Screens/Cart";

export default function Navbar() {
  const navigate = useNavigate();

  const [cartView, setCartView] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            BistroBite
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2 ">
              <Link className="nav-link active fs-4" aria-current="page" to="/">
                Home
              </Link>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-4"
                    aria-current="page"
                    to="/"
                  >
                    My orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </div>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/"
                  onClick={loadCart}
                >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {items.length}
                  </Badge>
                </Link>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}
                <Link
                  className="btn bg-white text-danger mx-1"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
