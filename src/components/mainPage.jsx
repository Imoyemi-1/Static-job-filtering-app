import JobCard from './JobCard';
import { useState } from 'react';
import data from '/data.json';

function MainPage() {
  const [jobFilter, setJobFilter] = useState([]);

  const filteredJobs = data.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return jobFilter.every((f) => tags.includes(f));
  });

  //   set filter job to job data
  const setFilteredJob = (word) => {
    setJobFilter((prev) => (prev.includes(word) ? prev : [...prev, word]));
  };

  return (
    <main className='flex flex-col md:items-center  gap-y-14 p-6 md:gap-y-6 pt-15 bg-green-c-50 min-h-screen'>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} setFilteredJob={setFilteredJob} />
      ))}
    </main>
  );
}

export default MainPage;
