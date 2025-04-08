import React from "react";
import "./Filters.css";
import { useState } from "react";

const Filters = ({ onFilterChange }) => {
    const [filterState, setFilterState] = useState({
        experience: "",
        type: "",
        mode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...filterState, [name]: value };
        setFilterState(updated);
        onFilterChange(updated);
    };

    return (
        <div className="vertical-job-filters">
            <aside className="filter-panel">
                <h3 className="filter-title">🎯 Refine Your Search</h3>

                <div className="filter-group">
                    <label htmlFor="keyword">Keyword</label>
                    <input
                        type="text"
                        id="keyword"
                        placeholder="e.g. Developer, Designer..."
                    />
                </div>

                <div className="filter-collapsible">
                    <div className="collapsible-header">
                        <span>Experience</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>

                <div className="filter-collapsible">
                    <div className="collapsible-header">
                        <span>Work Mode</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>

                <div className="filter-collapsible">
                    <div className="collapsible-header">
                        <span>Job Type</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </aside>

            <section className="quick-tags-section">
                <h3 className="quick-title">🚀 Quick Search Tags</h3>
                <div className="quick-tags-grid">
                    {[
                        "#Fresher",
                        "#WFH",
                        "#IT",
                        "#HR",
                        "#Finance",
                        "#Medical",
                        "#Research",
                        "#MBA",
                        "#Sales",
                        "#Engineering",
                        "#Non Government Jobs",
                    ].map((tag, i) => (
                        <span key={i} className="quick-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
        </div>

    );
};


export default Filters;
