import JobCard from './JobCard';
import { useState } from 'react';
import data from '/data.json';

function MainPage() {
  const [jobData, setJobData] = useState(data);
  const [jobFilter, setJobFilter] = useState([]);

  const filteredJobs = jobData.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return jobFilter.every((f) => tags.includes(f));
  });

  //   set filter job to job data
  const setFilteredJob = () => setJobData(filteredJobs);

  return (
    <main className='flex flex-col md:items-center  gap-y-14 p-6 md:gap-y-6 pt-15 bg-green-c-50 min-h-screen'>
      {jobData.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          setJobFilter={setJobFilter}
          setFilteredJob={setFilteredJob}
        />
      ))}
    </main>
  );
}

export default MainPage;
