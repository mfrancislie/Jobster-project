import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const StatsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return <div>StatsPage</div>;
};

export default StatsPage;
