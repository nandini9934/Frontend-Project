import React from "react";
import "./SearchBar.css";
import { FaSearch, FaMapMarkerAlt, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa";

const SearchBar = () => {
    return (
        <section className="job-search-section">
            <div className="search-container">
                <h2 className="search-title">Find Your Dream Job</h2>
                <div className="search-fields">

                    <div className="input-group">
                        <FaSearch className="icon" />
                        <input type="text" placeholder="Job title or keyword..." />
                    </div>

                    <div className="input-group">
                        <FaMapMarkerAlt className="icon" />
                        <select defaultValue="">
                            <option value="" disabled>Select Location</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Pune</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <FaGraduationCap className="icon" />
                        <select defaultValue="">
                            <option value="" disabled>Experience Level</option>
                            <option>Fresher</option>
                            <option>1-3 Years</option>
                            <option>3+ Years</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <FaMoneyBillWave className="icon" />
                        <select defaultValue="">
                            <option value="" disabled>Expected Salary</option>
                            <option>₹10k - ₹20k</option>
                            <option>₹20k - ₹50k</option>
                            <option>₹50k+</option>
                        </select>
                    </div>

                    <button className="search-btn">Search Jobs</button>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;
