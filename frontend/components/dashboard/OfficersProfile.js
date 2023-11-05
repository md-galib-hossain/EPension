import { useDispatch, useSelector } from "react-redux";
import {
  AddAssistantGeneralFlag,
  AddJuniorOfficerFlag,
  accountStatusUpdate,
  decreaseAssistantGeneralFlag,
  decreaseJuniorOfficerFlag,
  updatePensionFormExpiry,
} from "@/app/feature/headOfficer/headOfficerSlice";
import { Pagination } from "antd";

import React, { useEffect } from "react";
import DelayTime from "./DelayTime";
import SubmissionDate from "./SubmissionDate";
import ApprovedDate from "./ApprovedDate";
import RejectionDate from "./RejectionDate";
import Link from "next/link";
import ViewPensionForm from "./ViewPensionForm";
import { useState } from "react";
import ViewReason from "./ViewReason";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import PiChart from "./PiChart";
import PerformanceChart from "./PerformanceChart";
import axios from "axios";
import { Button } from "antd";
import ViewTestimonialHead from "./ViewTestimonialHead";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";

function countApplicationsByMonth(applications) {
  const result = [];

  applications.forEach((application) => {
    const createdDate = new Date(application.created);
    const monthKey = `${createdDate.getFullYear()}-${(
      createdDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;

    let existingMonth = result.find((item) => item.month === monthKey);

    if (!existingMonth) {
      existingMonth = {
        month: monthKey,
        applications: 0,
        approved: 0,
        rejected: 0, // Add rejected count
        pending: 0,
        Expired: 0,
        performance: 0,
      };
      result.push(existingMonth);
    }

    // Update total applications count
    existingMonth.applications += 1;

    // Update status counts
    if (application.status === "approved") {
      existingMonth.approved += 1;
    } else if (application.status === "rejected") {
      existingMonth.rejected += 1;
    } else if (application.status === "pending") {
      if (application.from_expired_out.length === 0) {
        existingMonth.pending += 1;
      } else {
        existingMonth.Expired += 1;
      }
    }

    // Calculate performance rate
    existingMonth.performance =
      (existingMonth.approved + existingMonth.rejected) /
      existingMonth.applications;
  });

  return result;
}

const OfficersProfile = ({
  role,
  applications,
  assistantGeneral,
  juniorOfficer,
  onAddFlagClick,
}) => {
  const [open, setOpen] = useState(false);
  const [openReason, setOpenReason] = useState(false);
  // govt database start
  const [govtData, setGovtData] = useState([]); // State to store government data
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

  // govt database end

  const dispatch = useDispatch();
  const { Officers, reports } = useSelector((state) => state.headOfficer);

  // created month and count start
  const [applicationCountByMonth, setApplicationCountByMonth] = useState([]);

  useEffect(() => {
    // Count applications by month when the 'applications' prop changes
    const countByMonth = countApplicationsByMonth(applications);
    setApplicationCountByMonth(countByMonth);
  }, [applications]);

  // Example usage of the application count by month
  console.log(applicationCountByMonth, "count");
  // created month and count end

  const handleAssistantGeneralFlagClick = async (id) => {
    try {
      // Pass an object with id and flags
      dispatch(AddAssistantGeneralFlag({ id, flags: 1 }));
      window.location.reload();
    } catch (err) {
      console.error("Error adding Assistant General Flag:", err);
    }
  };

  const handleJuniorOfficerFlagClick = async (id) => {
    try {
      dispatch(AddJuniorOfficerFlag({ id, flags: 1 }));
      window.location.reload();
    } catch (err) {
      console.error("Error adding Junior Officer Flag:", err);
    }
  };

  const generalDecreaseFlagClick = (id) => {
    dispatch(decreaseAssistantGeneralFlag());
    dispatch(AddAssistantGeneralFlag({ id, flags: -1 }));
    window.location.reload();
  };

  const juniorDecreaseFlagClick = (id) => {
    dispatch(decreaseJuniorOfficerFlag());
    dispatch(AddJuniorOfficerFlag({ id, flags: -1 }));
    window.location.reload();
  };

  // update account_status of assistantGeneral and juniorOfficer
  const handleAccountStatus = ({ id, Status }) => {
    if (Status === "active") {
      dispatch(accountStatusUpdate({ id, Status: "deactive" }));
      window.location.reload();
    } else {
      dispatch(accountStatusUpdate({ id, Status: "active" }));
      window.location.reload();
    }
  };

  // expired status change starts
  const handleRemoveExpired = (id) => {
    dispatch(updatePensionFormExpiry(id));
    window.location.reload();
  };
  // expired status change ends

  // pagination starts
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [testimonialOpen, setTestimonialOpen] = useState(false);
  const itemsPerPage = 4;

  // Calculate the total number of pages
  const totalItems = isFilterActive
    ? applications?.filter(
        (application) => application.from_expired_out.length > 0
      ).length
    : applications?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Set the default current page to be the last page
  useEffect(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedApplications = isFilterActive
    ? applications
        ?.filter((application) => application.from_expired_out.length > 0)
        .slice(startIndex, endIndex)
    : applications?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
  };

  // pagination ends


  // export chart start
  const chartsContainerRef = useRef(null);

  const exportChartsAsPDF = async () => {
    // Get the charts container element
    const chartsContainer = chartsContainerRef.current;

    // Create a new jsPDF instance
    const pdf = new jsPDF({
      orientation: 'landscape', // Landscape mode
      unit: 'mm',
      format: 'a4', // A4 size paper
      compress: true,
      precision: 16, // Increase precision for better quality
    });

    // Loop through each chart in the container
    const charts = chartsContainer.children;
    for (let i = 0; i < charts.length; i++) {
      const chart = charts[i];

      // Convert the chart to an image using html2canvas with higher DPI
      const canvas = await html2canvas(chart, { scale: 2 }); // Increase scale for better quality

      // Add the image to the PDF with adjusted size
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 180, 100);

      // Add a new page for the next chart (if any)
      if (i < charts.length - 1) {
        pdf.addPage();
      }
    }

    // Save or download the PDF
    pdf.save('charts.pdf');
  };
  // export chart end
  return (
    <>
      {/*  this part for the tiny bar chart start */}
      <button onClick={exportChartsAsPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Export Charts
      </button>
      <div className="my-10 flex flex-col md:flex-row"  ref={chartsContainerRef}>
        {/* chart 1 start */}
        <div className="w-full h-96 my-10">
          <h2 className="text-2xl mb-4">Monthly Applications Bar Chart</h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={applicationCountByMonth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#0E364A" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* chart 1 end */}
        {/* chart 2 start */}
        <PiChart applicationCountByMonth={applicationCountByMonth}></PiChart>
        {/* chart 2 end */}
        {/* chart 3 start */}
        <PerformanceChart
          applicationCountByMonth={applicationCountByMonth}
        ></PerformanceChart>
        {/* chart 3 end */}
          {/* Export Charts Button */}
    
      </div>
      {/*  this part for the tiny bar chart end */}
      <div className="my-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">
          All Pension Applications{" "}
        </h2>
        <div className="h-80">
          <table
            className="min-w-full divide-y divide-gray-200"
            scroll={{ y: 400 }}
          >
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Submission date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Approved date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  rejection Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Processing By
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Processing Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Testimonial
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  View Details
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Waiting for Days
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Is Expired
                </th>
                {/* <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {displayedApplications?.map((application) => (
                <>
                  <tr key={applications?._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {application?.user}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {application?.fullName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {
                        <SubmissionDate
                          inputDate={application?.created}
                        ></SubmissionDate>
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {
                        <ApprovedDate
                          rejectionDate={application?.rejectionDate}
                          inputDate={application?.approvalDate}
                        ></ApprovedDate>
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {
                        <RejectionDate
                          approvedDate={application?.approvalDate}
                          inputDate={application?.rejectionDate}
                        ></RejectionDate>
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {application?.process_status_by_role ||
                          application.rejected_by_role}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="t.ext-sm leading-5 text-gray-900">
                      {application?.status === "rejected" ? (
  <div className="flex gap-2">
    {application?.status}
    <ViewReason
      rejected_by_role={application?.rejected_by_role}
      rejectionReason={application?.rejectionReason}
      setOpenReason={setOpenReason}
      openReason={openReason}
    />
  </div>
) : application?.status === "approved" && (
  !govtData.some(item => item.nidNumber === application?.nidNumber) ||
  application?.testimonialImage
) ? (
  <div className="flex gap-2">
    {application?.status}
    <span style={{ color: 'red' }}>
      <InfoCircleOutlined style={{ fontSize: "20px" }} />
    </span>
  </div>
) : (
  application?.status
)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {/* testimonial section start */}
                        <Link
                          href={{
                            pathname: "/dashboard",
                          }}
                        >
                          <ViewTestimonialHead
                            testimonialImage={application?.testimonialImage}
                            role={"juniorOfficer"}
                            setTestimonialOpen={setTestimonialOpen}
                            testimonialOpen={testimonialOpen}
                          />
                        </Link>
                        {/* testimonial section end */}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        <Link
                          href={{
                            pathname: "/dashboard",
                            query: application,
                          }}
                        >
                          <ViewPensionForm
                            govtData={govtData}
                            role={"headOfOffice"}
                            setOpen={setOpen}
                            open={open}
                          />
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {
                        <DelayTime
                          rejectionDate={application?.rejectionDate}
                          applicationStatus={application?.status}
                          time={application?.created}
                        ></DelayTime>
                      }
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      {application.from_expired_out.length > 0 ? (
                        <Button
                          onClick={() => handleRemoveExpired(application?._id)}
                          className="bg-red-500 hover:bg-red-700 text-white rounded"
                        >
                          Remove Expired
                        </Button>
                      ) : (
                        <div className="text-sm leading-5 text-gray-900">
                          Not Expired
                        </div>
                      )}
                    </td>
                    {/* GB */}
                    {/* <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {juniorOfficer?.account_status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {juniorOfficer?.rejected_by_role}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {juniorOfficer?.rejectionReason}
                                        </div>
                                    </td> */}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex ">
          {/* filter checkbox start */}
          <div className="m-6 justify-start">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={isFilterActive}
                onChange={handleFilterToggle}
              />
              <span className="ml-2 text-gray-700">
                Show only expired applications
              </span>
            </label>
          </div>
          {/* filter checkbox start */}
          <div className="m-6 ml-auto">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className="my-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Assistant Generals</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Account Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Flags
              </th>
              {/* <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Number of Complaints
                            </th> */}
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assistantGeneral?.map((assistantGeneral) => (
              <tr key={assistantGeneral._id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {assistantGeneral.about.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {assistantGeneral.about.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {assistantGeneral.about.role}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {assistantGeneral.account_status}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {new Date(assistantGeneral.created).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {assistantGeneral.flags}
                  </div>
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">
                                        Total: {assistantGeneral.numOfComplain}<br />
                                        Resolved: {assistantGeneral.numOfComplainResolved}<br />
                                        Unresolved: {assistantGeneral.numOfComplainUnresolved}
                                    </div>
                                </td> */}
                <td className="px-6 py-4 whitespace-no-wrap flex gap-4">
                  {/* Add Flag Button */}
                  <button
                    onClick={() =>
                      handleAssistantGeneralFlagClick(assistantGeneral._id)
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Add Flag
                  </button>
                  {/* Edit Flag Button */}
                  <button
                    onClick={() =>
                      generalDecreaseFlagClick(assistantGeneral._id)
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                  >
                    Remove Flag
                  </button>
                  {assistantGeneral.account_status === "active" ? (
                    <button
                      onClick={() =>
                        handleAccountStatus({
                          id: assistantGeneral._id,
                          Status: assistantGeneral.account_status,
                        })
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                    >
                      Deactive
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleAccountStatus({
                          id: assistantGeneral._id,
                          Status: assistantGeneral.account_status,
                        })
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                    >
                      Active
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Junior Officers</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Account Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Flags
              </th>
              {/* <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Number of Complaints
                            </th> */}
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {juniorOfficer?.map((juniorOfficer) => (
              <tr key={juniorOfficer._id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {juniorOfficer.about.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {juniorOfficer.about.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {juniorOfficer.about.role}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {juniorOfficer.account_status}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {new Date(juniorOfficer.created).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {juniorOfficer.flags}
                  </div>
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">
                                        Total: {juniorOfficer.numOfComplain}<br />
                                        Resolved: {juniorOfficer.numOfComplainResolved}<br />
                                        Unresolved: {juniorOfficer.numOfComplainUnresolved}
                                    </div>
                                </td> */}
                <td className="px-6 py-4 whitespace-no-wrap flex gap-4">
                  {/* Add Flag Button */}
                  <button
                    onClick={() =>
                      handleJuniorOfficerFlagClick(juniorOfficer._id)
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Add Flag
                  </button>
                  {/* Edit Flag Button */}
                  <button
                    onClick={() => juniorDecreaseFlagClick(juniorOfficer._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                  >
                    Remove Flag
                  </button>
                  {juniorOfficer.account_status === "active" ? (
                    <button
                      onClick={() =>
                        handleAccountStatus({
                          id: juniorOfficer._id,
                          Status: juniorOfficer.account_status,
                        })
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                    >
                      Deactive
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleAccountStatus({
                          id: juniorOfficer._id,
                          Status: juniorOfficer.account_status,
                        })
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                    >
                      Active
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OfficersProfile;
