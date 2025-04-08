import React from "react";
import "./Footer.css";

const FooterStats = () => {
  return (
    <div className="footer-top-unique">
      <div className="footer-card">
        <div className="footer-card-header">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Jobs in India</h4>
        </div>
        <div className="tags-grid">
          {[
            "#Mumbai", "#Delhi", "#Ajmer", "#Pune", "#Hyderabad", "#Agra",
            "#Chennai", "#Kolkata", "#Indore", "#Gurugram", "#Jaipur", "#Ahmedabad"
          ].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="footer-card">
        <div className="footer-card-header">
          <i className="fa-solid fa-globe"></i>
          <h4>International Jobs</h4>
        </div>
        <div className="tags-grid">
          {[
            "#Africa", "#USA", "#UK", "#Australia", "#Canada",
            "#Singapore", "#Dubai", "#Saudi Arabia", "#New Zealand"
          ].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterStats;
