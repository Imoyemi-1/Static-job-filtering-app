function JobCard({ job, setJobFilter }) {
  return (
    <article className='relative bg-white w-full p-6 rounded-lg max-w-[1024px] shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-l-4 border-transparent hover:border-green-c-400 transition-colors duration-300 ease-in-out'>
      <img
        className='w-16 h-16 md:w-24 md:h-24 rounded absolute -top-8 md:static'
        src={job.logo}
        alt={job.company}
      />
      <div className='flex-1 mt-5 md:border-b-0 border-b border-gray-c-400 pb-4 md:mr-4'>
        <div className='flex gap-2 items-center mb-2'>
          <p className='text-green-c-400 font-medium'>{job.company}</p>
          {job.new && (
            <span className='text-green-c-50 font-medium bg-green-c-400 px-2.5 py-0.5 rounded-3xl'>
              {'New!'.toUpperCase()}
            </span>
          )}
          {job.featured && (
            <span className='text-green-c-50 font-medium bg-green-c-900 px-2.5 py-0.5 rounded-3xl'>
              {'Featured'.toUpperCase()}
            </span>
          )}
        </div>
        <h2 className='text-lg font-bold text-green-c-900 hover:text-green-c-400 transition-colors duration-300 ease-in-out cursor-pointer'>
          {job.position}
        </h2>
        <ul className='flex gap-7.5 text-gray-c-400 mt-2'>
          <li>{job.postedAt}</li>
          <li className='list-disc'>{job.contract}</li>
          <li className='list-disc'>{job.location}</li>
        </ul>
      </div>
      <ul className='flex gap-4 flex-wrap text-green-c-400 font-bold '>
        <li
          onClick={() =>
            setJobFilter((prev) =>
              prev.includes(job.role) ? prev : [...prev, job.role]
            )
          }
          className='bg-green-c-50 px-3 py-1 rounded shadow-sm hover:bg-green-c-400 hover:text-green-c-50 transition-colors duration-300 ease-in-out cursor-pointer'
        >
          {job.role}
        </li>
        <li
          onClick={() =>
            setJobFilter((prev) =>
              prev.includes(job.level) ? prev : [...prev, job.level]
            )
          }
          className='bg-green-c-50 px-3 py-1 rounded shadow-sm hover:bg-green-c-400 hover:text-green-c-50 transition-colors duration-300 ease-in-out cursor-pointer'
        >
          {job.level}
        </li>
        {job.languages.length > 0 &&
          job.languages.map((lang) => (
            <li
              onClick={() =>
                setJobFilter((prev) =>
                  prev.includes(lang) ? prev : [...prev, lang]
                )
              }
              key={lang}
              className='bg-green-c-50 px-3 py-1 rounded shadow-sm hover:bg-green-c-400 hover:text-green-c-50 transition-colors duration-300 ease-in-out cursor-pointer'
            >
              {lang}
            </li>
          ))}
        {job.tools.length > 0 &&
          job.tools.map((tool) => (
            <li
              onClick={() =>
                setJobFilter((prev) =>
                  prev.includes(tool) ? prev : [...prev, tool]
                )
              }
              key={tool}
              className='bg-green-c-50 px-3 py-1 rounded shadow-sm hover:bg-green-c-400 hover:text-green-c-50 transition-colors duration-300 ease-in-out cursor-pointer'
            >
              {tool}
            </li>
          ))}
      </ul>
    </article>
  );
}

export default JobCard;
