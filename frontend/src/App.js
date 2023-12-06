import { Routes, Route, Link } from "react-router";
import RestaurantsList from "./components/RestaurantsList";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Routes>
          <Route path="/restaurants" element={<RestaurantsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
