function JobCard({ job }) {
  return (
    <article>
      <img src={job.logo} alt={job.company} />
      <div>
        <div>
          <p>{job.company}</p>
          {job.new && <span>New!</span>}
          {job.featured && <span>Featured</span>}
        </div>
        <h2>{job.position}</h2>
        <ul>
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <ul>
        <li>{job.role}</li>
        <li>{job.level}</li>
        <li>{job.languages.join(', ')}</li>
        <li>{job.tools.join(', ')}</li>
      </ul>
    </article>
  );
}

export default JobCard;
