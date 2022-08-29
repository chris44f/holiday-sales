import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./features/homepage/Homepage";
import { SearchResults } from "./features/search-results/SearchResults";
import { SaleDetails } from "./features/sale-details/SaleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/sale/:id" element={<SaleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
