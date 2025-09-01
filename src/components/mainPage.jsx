import JobCard from './JobCard';
import data from '../data.json';
import { useState } from 'react';

function MainPage() {
  const [jobData, setJobData] = useState(data);

  return (
    <main>
      {jobData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </main>
  );
}

export default MainPage;
