
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports, allOfficers, fetchReportById, fetchAllPensions } from '@/app/feature/headOfficer/headOfficerSlice';
import OfficersProfile from './OfficersProfile';
import ComplainTable from './complainTable';

const HeadOfficer = ({ role }) => {
  const dispatch = useDispatch();
  const { flag, reports, Officers, applications, assistantGeneralFlag, juniorOfficerFlag, singleReport, loading, error } = useSelector(
    (state) => state.headOfficer);

  // console.log("Officers: ", Officers);

  const assistantGeneral = Officers.assistantGeneral;
  const juniorOfficer = Officers.juniorOfficer;

  console.log("applications -------- : ", applications);


  useEffect(() => {
    // Load data when the component mounts
    dispatch(allOfficers());
    dispatch(fetchReports());
    dispatch(fetchAllPensions());
  }, [dispatch]);



  const handleReportClick = (reportId) => {
    dispatch(fetchReportById(reportId));
  };

  const handleReportDelete = (reportId) => {
    console.log("reportId: ", reportId);
  };

  return (
    <div className='mt-24 ml-10'>
      <h1 className='text-2xl font-semibold mb-4'>Head Officer Slice</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='text-red-500'>Error: {error.message}</p>
      ) : (
        <div className='grid grid-cols-1'>
          <div>
            <ComplainTable reports={reports} handleReportClick={handleReportClick} handleReportDelete={handleReportDelete} />
          </div>
          {singleReport && (
            <div>
              <h2 className='text-xl mt-4'>Selected Report</h2>
              <h3 className='text-lg font-semibold'>{singleReport.title}</h3>
              <p>{singleReport.content}</p>
            </div>
          )}
          <div>
            <OfficersProfile role={role} applications={applications} assistantGeneral={assistantGeneral} juniorOfficer={juniorOfficer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadOfficer;
