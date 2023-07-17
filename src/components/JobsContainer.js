import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobContainer';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  // if (isLoading) {
  //   return <Loading center />;
  // }

  // if (jobs.length === 0) {
  //   return (
  //     <Wrapper>
  //       <h1>No Jobs Display!</h1>;
  //     </Wrapper>
  //   );
  // }

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Jobs Info</h1>
      {isLoading && <Loading center />}
      {jobs.length === 0 && <Loading center />}
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
