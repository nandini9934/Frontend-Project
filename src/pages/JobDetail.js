import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(j => j.id.toString() === id);
        setJob(found);
      });
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="job-card">
        <h3>{job.title}</h3>
        <p><strong>{job.company}</strong></p>
        <p>{job.location}</p>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetail;
