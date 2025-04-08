import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import FooterStats from "./components/FooterStats";
import FooterBottom from "./components/FooterBottom";
import "./App.css";
import AppPromoCard from "./components/AppPromoCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [filters, setFilters] = useState({
    experience: "",
    type: "",
    mode: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="main-content">
        <Filters onFilterChange={handleFilterChange} />
        <JobList activeFilters={filters} />
        <AppPromoCard/>
      </div>
      <FooterStats />
      <FooterBottom />
    </div>
  );
}

export default App;
