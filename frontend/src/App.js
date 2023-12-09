import React from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantsList from "./components/RestaurantsList";
import LoginPage from "./components/LoginPage.js";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/restaurants" className="navbar-brand">
          Culinary Quest
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              All Restaurants
            </Link>
          </li>
          <li className="nav-item">
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
      <div className="container mt-3">
        <Routes>
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route
            path="/login"
            element={<LoginPage login={login} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
