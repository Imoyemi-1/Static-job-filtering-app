function JobCard({ job }) {
  console.log(job);
  return (
    <article>
      <img src='' alt='' />
      <div>
        <div>
          <h2>Job Title</h2>
        </div>
        <p>Senior Frontend Developer</p>
        <ul>
          <li>1d ago</li>
          <li>Full Time</li>
          <li>USA only</li>
        </ul>
      </div>
      <ul>
        <li>Frontend</li>
        <li>React</li>
        <li>JavaScript</li>
      </ul>
    </article>
  );
}

export default JobCard;
