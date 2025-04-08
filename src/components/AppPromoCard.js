// src/components/AppPromoCard.js
import React from "react";
import "./AppPromoCard.css";

const AppPromoCard = () => {
  return (
    <div className="promo-card">
      <h3>Apply to JOBS On-The-Go Jobringer Mobile App</h3>
      <a
        href="https://play.google.com/store/apps/details?id=com.jobringer.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="play-badge"
        />
      </a>
    </div>
  );
};

export default AppPromoCard;
