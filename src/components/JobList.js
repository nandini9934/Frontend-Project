import React from "react";
import JobCard from "./JobCard";
import jobsData from "./data/JobsData";
import "./JobList.css";

const JobList = () => {
    return (
        <div className="job-list-scroll">
            <div className="job-list-vertical">
                {jobsData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>


    );
};

export default JobList;
