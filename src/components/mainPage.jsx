import JobCard from './JobCard';
import { useState, useRef, useEffect } from 'react';
import data from '/data.json';

function MainPage() {
  const [jobFilter, setJobFilter] = useState([]);
  const [filterHeight, setFilterHeight] = useState(0);

  // refs for filter div and main div
  const filterRef = useRef(null);
  const mainRef = useRef(null);

  // filter job data based on jobFilter state array

  const filteredJobs = data.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return jobFilter.every((f) => tags.includes(f));
  });

  //   set filter job to job data
  const setFilteredJob = (word) => {
    setJobFilter((prev) => (prev.includes(word) ? prev : [...prev, word]));
  };

  useEffect(() => {
    // set the height of the filter bar to a CSS variable
    if (filterRef.current) {
      const height = filterRef.current.offsetHeight;
      setFilterHeight(height);
      mainRef.current.style.paddingTop = `${height + 32}px`;
    }

    // remove the height if there are no filters
    if (!jobFilter.length) {
      setFilterHeight(0);
      mainRef.current.style.paddingTop = `3.5rem`;
    }

    // add event listener to window resize
    window.addEventListener('resize', () => {
      if (filterRef.current) {
        const height = filterRef.current.offsetHeight;
        setFilterHeight(height);
        mainRef.current.style.paddingTop = `${height + 32}px`;
      }
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [filterHeight, jobFilter]);

  return (
    <main
      ref={mainRef}
      className='relative h-fit flex flex-col md:items-center  gap-y-14 p-6 md:gap-y-6  pt-15 bg-green-c-50 min-h-[calc(100vh-150px)]]'
    >
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} setFilteredJob={setFilteredJob} />
      ))}
      {!jobFilter.length ? null : (
        <div
          ref={filterRef}
          className='absolute -top-8 left-[1.5rem] right-[1.5rem] p-4 flex items-center justify-between bg-white rounded-lg max-w-[1024px] mx-auto shadow-md'
        >
          <div className='flex gap-3 flex-wrap'>
            {jobFilter.map((job) => (
              <div className='flex ' key={job}>
                <p className='bg-green-c-50 px-3 py-1 rounded-bl-sm rounded-tl-sm shadow-sm font-medium text-green-c-400 '>
                  {job}
                </p>
                <button
                  onClick={() => {
                    setJobFilter((prev) => prev.filter((f) => f !== job));
                  }}
                  className='p-1 bg-green-c-400 hover:bg-green-c-900 cursor-pointer duration-300 ease-in-out transition-colors rounded-br-sm rounded-tr-sm shadow-sm px-2'
                >
                  <img src='/images/icon-remove.svg' alt='remove-icon' />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setJobFilter([])}
            className='text-gray-c-400 font-medium hover:text-green-c-400 hover:underline underline-offset-1 transition-colors duration-300 cursor-pointer'
          >
            Clear
          </button>
        </div>
      )}
    </main>
  );
}

export default MainPage;
