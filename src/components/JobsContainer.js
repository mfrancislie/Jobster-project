import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobContainer';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';
const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

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
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      {/* {isLoading && <Loading center />}
      {jobs.length === 0 && <Loading center />} */}
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
