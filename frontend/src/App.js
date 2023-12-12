import React from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantDetails from "./components/RestaurantDetails";
import ReviewsList from "./components/ReviewsList";
import LoginPage from "./components/LoginPage";
import EditReview from "./components/EditReview";
import AddReview from "./components/AddReview";
import "./css/App.css";

function App() {
  const [user, setUser] = React.useState(null);
  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light px-3">
        <a href="/restaurants" className="navbar-brand">
          Culinary Quest
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <li className="nav-item mx-1 d-flex justify-content-center align-items-center">
            <Link to={"/restaurants"} className="nav-link">
              All Restaurants
            </Link>
          </li>
          <li className="nav-item mx-1 d-flex justify-content-center align-items-center">
            {user ? (
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container-xxl container-fluid">
        <Routes>
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantDetails />}
          />
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route
            path="/restaurants/:restaurantId/reviews"
            element={<ReviewsList user={user} />}
          />
          <Route
            path="/restaurants/:restaurantId/reviews/new"
            element={<AddReview user={user} />}
          />
          <Route
            path="/restaurants/:restaurantId/reviews/:reviewId/edit"
            element={<EditReview user={user} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
