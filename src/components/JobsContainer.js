import React from 'react';
import { useSelector } from 'react-redux';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobContainer';
import Loading from './Loading';
const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h1>No Jobs Display!</h1>;
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Jobs Info</h1>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
