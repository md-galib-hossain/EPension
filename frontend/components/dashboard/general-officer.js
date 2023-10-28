import React, { useEffect, useState } from 'react'
import {
  DeleteOutlined,
  CheckOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Button, Spin, Table, message } from "antd";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { updateGenarelOfficerStatus } from '@/app/feature/pensionData/pensionFormSlice';
import { MyProfileAssistanceGeneral, fetchAllPensions, updateAssistanceGeneral } from '@/app/feature/assistantGeneral/assistantGeneralSlice';
import ViewPensionForm from './ViewPensionForm';

function GeneralOfficer({ role }) {
  const [localStorage_user_id, setLocalStorage_user_id] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const [status, setStatus] = useState({ status: 'approved', id: '' });
  const [rejectionReason, setRejectionReason] = useState('');

  const [open, setOpen] = useState(false);
  const [assistantGeneral, setAssistantGeneral] = useState({});
  const [govtData, setGovtData] = useState([]); // State to store government data
  // Pension Form Data
  const { allApplications,loading } = useSelector((state) => state.GeneralOfficer);
  const singleUserData = allApplications?.find((user) => user._id === user._id ? user : null);
   // Find the matching govtData object based on the nid_number condition
   

  // console.log('allApplications : ', allApplications);


  useEffect(() => {
    dispatch(fetchAllPensions());
    dispatch(MyProfileAssistanceGeneral())
      .then((response) => {
        console.log('MyProfileAssistanceGeneral data:', response.payload);
        setAssistantGeneral(response.payload);
      })
      .catch((error) => {
        console.error('Error fetching MyProfileAssistanceGeneral:', error);
      });
  }, [dispatch]);


  useEffect(() => {
    // Make a GET request to your API endpoint
    fetch("http://localhost:5000/govtdata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the govtData state with the fetched data
        setGovtData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        // Set the error state if there's a problem with the request
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount



  // Get userId form Localhost
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setLocalStorage_user_id(user._id);
  }, []);



  // Function to update the status and trigger Redux action
  const handleUpdateStatus = (formId) => {
    const newData = {
      status: status?.status,
      rejectionReason,
    };


    dispatch(updateAssistanceGeneral({ formId, newData }))
      .then(() => {
        message.success('Status updated successfully.');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error :', error.message);
      });
  };

  // Delete Action
  const handleDeleteForm = () => { }



  const dataSource = allApplications?.map((formData, index) => {
    let isexpired = false;
    formData?.from_expired_out?.map((expired_out) => {
      if (expired_out?.expired_out_by_user === localStorage_user_id) {
        isexpired = expired_out?.isexpired;
      }
    })


    const date = new Date(formData?.created).toLocaleDateString("en-US");

    return {
      id: index,
      fullName: formData?.user,
      nid_number: formData?.nidNumber, // Add other fields as needed
      status: formData?.status,
      rejected_by_role: formData?.rejected_by_role,
      process_status_by_role: `${formData?.process_status_by_role !== "" ? formData?.process_status_by_role : ""}`,
      expired_out_by_role: formData?.from_expired_out?.expired_out_by_role,
      isexpired: `${isexpired ? "Expired" : "Avaiable"}`,
      userId: formData?.user,
      formId: formData?._id,
      date: date,
      formData: formData
    };
  });


  const columns = [
    { title: "NID ", dataIndex: "nid_number" },
    { title: "User ID", dataIndex: "userId" },
    { title: "Submission Date", dataIndex: "date" },
    { title: "Application Status", dataIndex: "status" },
    { title: "Process Status", dataIndex: `${"rejected_by_role" !== "" ? "process_status_by_role" : ""}` },

    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-1">
            
            <div>
         
              <div className='flex gap-10 items-center'>
             
                {
                  // status.id === record.id && 
                  <select value={status.id === record.id ? status.status : null} onChange={(e) => setStatus({ status: e.target.value, id: record.id })} className='p-2 bg-gray-100 border-gray-300'>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                }
                {status.status === 'rejected' && status.id === record.id ? (
                  <div className=''>
                    <p>Rejection Reason:</p>
                    <textarea
                      value={rejectionReason}
                      className='border-2 border-gray-300 p-2'
                      onChange={(e) => setRejectionReason(e.target.value)}
                    ></textarea>
                  </div>
                ) : null}

                {assistantGeneral?.account_status === 'active' ? (
                  <>
                    <button
                      className={`${singleUserData?.process_status_by_role === 'juniorOfficer' || record?.isexpired === "Expired" || (status.status === 'rejected' && rejectionReason.trim() === '')
                        ? 'cursor-not-allowed my-3 p-2 rounded border text-blue-700'
                        : 'my-3 p-2 rounded border text-blue-700 hover:text-gray-100 hover:bg-blue-700 font-semibold bg-indigo-100 items-center flex gap-2'
                        }`}
                      onClick={() => handleUpdateStatus(record.formId)}
                    >
                      <CheckOutlined /> Submit
                    </button>
                    <Link href={{
                      pathname: '/dashboard',
                      query: record.formData,
                    }}
                    >
                      <ViewPensionForm govtData={govtData} role={"generalOfficer"} setOpen={setOpen} open={open} />
                    </Link>

                  </>
                ) : assistantGeneral?.account_status === 'deactive' || record?.isexpired === "Avaiable" ? (
                  <button
                    className={`cursor-not-allowed my-3 p-2 rounded border text-blue-700`}
                    disabled
                  >
                    <CheckOutlined /> Submit (Deactive)
                  </button>
                ) : null}
              </div>
            </div>
          </div >
        );
      },
    },

    { title: "Appliction Expired date", dataIndex: `${"isexpired"}` },
  ];
  return (
    <>
       {loading && 
         <div className='flex items-center justify-center h-screen'>
         <Spin size="large" />
       </div>}
      <div className="mx-24 mt-20 flex items-center gap-4">
        
        <div>
          <span className='font-bold text-[20px]' >
            Account Type:
          </span>
          <span className='bg-indigo-600 rounded mx-4 py- px-1 text-white text-[18px] uppercase'>
            {role}
          </span>
        </div>
        <p className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <FlagOutlined className='text-[30px] text-red-600' />
          <span className="sr-only">Notifications</span>
          <div
            className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900
              ${assistantGeneral?.flags >= 3
                ? 'bg-red-600'
                : assistantGeneral?.flags === 2
                  ? 'bg-yellow-400'
                  : assistantGeneral?.flags === 1
                    ? 'bg-green-500'
                    : ''
              }`}
          >{assistantGeneral?.flags}</div>
        </p >
        <p>Account: <span className='bg-green-600 rounded mx-4 py- px-1 text-white text-[15px] uppercase'>{assistantGeneral?.account_status}</span></p>
      </div >
      {/* new modify start */}
      <div className="container mx-auto p-4">
   

      <div className="w-full md:mt-8">
        <h2 className="text-xl mb-4">Pension Holder Form Data:</h2>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.id}
          className="hoverable-table"
        />
      </div>
    </div>
            {/* new modify end */}

    </>
  )
}

export default GeneralOfficer
