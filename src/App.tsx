// This is a file for the main application

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/header";
import ProductsPage from "./components/ProductsPage";
import HomePage from "./components/Home";

// Importing Styling
import "./styling/main.css";
import "./styling/Header.css";
import "./styling/ProductsPage.css";
import "./styling/HomePage.css";
import "../public/mockupData.json";

// Importing mockup data
let mockupData: object[];
await fetch("/mockupData.json")
  .then((res) => res.json())
  .then((data) => {
    // Turning JSON into Array of arrays
    mockupData = Object.values(data);

    let i = 0;
    for (const item of mockupData) {
      mockupData[i] = Object.values(item);
      i++;
    }
  });

function App() {
  return (
    <>
      <Router>
        {/* Importing Header component */}
        <Header />

        {/* Importing page body */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductsPage componentsData={mockupData} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
