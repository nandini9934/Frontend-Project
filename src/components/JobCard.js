import React from "react";
import "./JobCard.css";
import { FaCamera, FaLink, FaDownload } from "react-icons/fa"; // you can pick others too

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-head">
        <img src={job.logo} alt="company" className="company-logo" />
        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <span className="badge">{job.mode}</span>
      </div>

      <div className="job-info">
        <p>{job.experience} | {job.salary} | {job.type}</p>
        <p>{job.location}</p>
        <p><strong>Key Skills:</strong> {job.skills}</p>
      </div>

      <div className="job-footer">
        <div className="actions">
          <button><FaCamera /></button>
          <button><FaLink /></button>
          <button><FaDownload /></button>
        </div>
        <button className="apply-btn">APPLY</button>
      </div>
    </div>
  );
};

export default JobCard;
