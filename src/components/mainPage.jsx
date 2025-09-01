import JobCard from './JobCard';
import { useState } from 'react';
import data from '/data.json';

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
