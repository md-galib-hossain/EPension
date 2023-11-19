import React, { useEffect, useState } from "react";
import {
  
  CheckOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Button, Spin, Table, message } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  JuniorOfficerProfile,
  fetchPensions,
  updateJuniorOfficer,
} from "@/app/feature/juniorOfficer/juniorOfficerSlice";
import Link from "next/link";
import ViewPensionForm from "./ViewPensionForm";
import ViewTestimonial from "./ViewTestimonial";

function JuniorOfficer({ role }) {
  const [open, setOpen] = useState(false);
  const [testimonialOpen, setTestimonialOpen] = useState(false);
  const [localStorage_user_id, setLocalStorage_user_id] = useState();
  const [user, setUser] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPensions());
    dispatch(JuniorOfficerProfile());
  }, [dispatch]);

  // All Junior Officer Data
  const { allApplications, juniorOfficer, loading } = useSelector(
    (state) => state.juniorOfficer
  );
  const singleUserData = allApplications?.find((user) =>
    user._id === user._id ? user : null
  );

  // console.log("singleUserData: ", singleUserData);

  // Get userId form Localhost
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    setLocalStorage_user_id(user._id);
  }, []);

  const [status, setStatus] = useState({ status: "pending", id: "" });
  const [rejectionReason, setRejectionReason] = useState("");

  // Function to update the status and trigger Redux action
  const handleUpdateStatus = (formId) => {
    const newData = {
      status: status?.status,
      rejectionReason,
    };

    console.log("newData: ", newData);

    dispatch(updateJuniorOfficer({ formId, newData }))
      .then(() => {
        message.success("Application status updated successfully.");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating application status:", error.message);
      });
  };

  // console.log("status: ", status);

  const dataSource = allApplications?.map((formData, index) => {
    console.log("formData: ", formData);
    let isexpired = false;
    formData?.from_expired_out?.map((expired_out) => {
      if (expired_out?.expired_out_by_user === localStorage_user_id) {
        isexpired = expired_out?.isexpired;
      }
    });

    const date = new Date(formData?.created).toLocaleDateString("en-US");

    return {
      id: index,
      fullName: formData?.user,
      nid_number: formData?.nidNumber, // Add other fields as needed
      status: formData?.status,
      rejected_by_role: formData?.rejected_by_role,
      process_status_by_role: `${
        formData?.process_status_by_role !== ""
          ? formData?.process_status_by_role
          : ""
      }`,
      expired_out_by_role: formData?.from_expired_out?.expired_out_by_role,
      isexpired: `${isexpired ? "Expired" : "Avaiable"}`,
      userId: formData?.user,
      formId: formData?._id,
      date: date,
      formData: formData,
    };
  });

  const columns = [
    { title: "NID ", dataIndex: "nid_number" },
    { title: "User ID", dataIndex: "userId" },
    { title: "Submission Date", dataIndex: "date" },
    { title: "Application Status", dataIndex: "status" },
    {
      title: "Process Status",
      dataIndex: `${"rejected_by_role" !== "" ? "process_status_by_role" : ""}`,
    },
    { title: "View Forms", render : (record) =>{
      return(
<div className="flex justify-center">
<Link
                      href={{
                        pathname: "/dashboard",
                        query: record.formData,
                      }}
                    >
                      <ViewPensionForm
                        role={"juniorOfficer"}
                        setOpen={setOpen}
                        open={open}
                      />
                    </Link>

</div>

      )
    }  },
    { title: "View Testimonial" , render : (record) =>{
      return(
<div className="flex justify-center">
   {/* testimonial section start */}
   <Link
                      href={{
                        pathname: "/dashboard",
                        query: record.formData,
                      }}
                    >
                      <ViewTestimonial
                        role={"juniorOfficer"}
                        setTestimonialOpen={setTestimonialOpen}
                        testimonialOpen={testimonialOpen}
                      />
                    </Link>
                    {/* testimonial section end */}

</div>

      )
    }  },

    {
      title: <div className="text-center">Actions</div>,
      render: (record) => {
        // console.log("record: ", record);
        return (
          <div className="grid grid-cols-1">
            <div>
              <div className="flex flex-col gap-2 items-center">
                {juniorOfficer?.account_status === "active" ? (
                  <>
                  
                 

                    {
                      <select
                        value={status.id === record.id ? status.status : null}
                        onChange={(e) =>
                          setStatus({ status: e.target.value, id: record.id })
                        }
                        className="p-2 bg-gray-100 border-gray-300"
                      >
                        <option value="pending">Approve</option>
                        <option value="rejected">Reject</option>
                      </select>
                    }
                    {status.status === "rejected" && status.id === record.id ? (
                      <div className="">
                        <p>Rejection Reason:</p>
                        <textarea
                          value={rejectionReason}
                          className="border-2 border-gray-300 p-2 w-[120px]"
                          onChange={(e) => setRejectionReason(e.target.value)}
                        ></textarea>
                      </div>
                    ) : null}

                    {/* <button
                      className={`${
                        singleUserData?.process_status_by_role ===
                          "assistantGeneral" ||
                        record?.isexpired === "Expired" ||
                        (status.status === "rejected" &&
                          rejectionReason.trim() === "") // Prevent Submit when rejected and rejectionReason is empty
                          ? "cursor-not-allowed my-3 p-2 rounded border text-blue-700"
                          : "my-3 p-2 rounded border text-blue-700 hover:text-gray-100 hover:bg-blue-700 font-semibold bg-indigo-100 items-center flex gap-2"
                      }`}
                      onClick={() => handleUpdateStatus(record.formId)}
                      disabled={
                        status.status === "rejected" &&
                        rejectionReason.trim() === ""
                      }
                    >
                      <CheckOutlined /> Submit
                    </button> */}
                  </>
                ) 
                // : juniorOfficer?.account_status === "deactive" ||
                //   record?.isexpired === "Avaiable" ? (
                //   <button
                //     className={`cursor-not-allowed my-3 p-2 rounded border text-blue-700`}
                //     disabled
                //   >
                //     <CheckOutlined /> Submit (Deactive)
                //   </button>
                // ) 
                : null}

                {/* {juniorOfficer?.account_status === "active" && (
                  <button
                    className={`${
                      singleUserData?.process_status_by_role ===
                        "assistantGeneral" ||
                      record?.isexpired === "Expired" ||
                      (status.status === "rejected" &&
                        rejectionReason.trim() === "") // Prevent Submit when rejected and rejectionReason is empty
                        ? "cursor-not-allowed my-3 p-2 rounded border text-blue-700"
                        : "my-3 p-2 rounded border text-blue-700 hover:text-gray-100 hover:bg-blue-700 font-semibold bg-indigo-100 items-center flex gap-2"
                    }`}
                    onClick={() => handleUpdateStatus(record.formId)}
                    disabled={
                      status.status === "rejected" &&
                      rejectionReason.trim() === ""
                    }
                  >
                    <CheckOutlined /> Submit
                  </button>
                )} */}
              </div>
            </div>
          </div>
        );
      },
    },

    {
      title: <div style={{ textAlign: "center" }}>Response</div>,
      render: (record) => {
        // console.log("record: ", record);
        return (
        <>
         {juniorOfficer?.account_status === "active" ? (
                  <button
                  className={`${
                    singleUserData?.process_status_by_role ===
                      "assistantGeneral" ||
                    record?.isexpired === "Expired" ||
                    (status.status === "rejected" &&
                      rejectionReason.trim() === "") // Prevent Submit when rejected and rejectionReason is empty
                      ? "cursor-not-allowed my-3 p-2 rounded border text-blue-700"
                      : "my-3 p-2 rounded border text-blue-700 hover:text-gray-100 hover:bg-blue-700 font-semibold bg-indigo-100 items-center flex gap-2"
                  }`}
                  onClick={() => handleUpdateStatus(record.formId)}
                  disabled={
                    status.status === "rejected" &&
                    rejectionReason.trim() === ""
                  }
                >
                  <div className="flex gap-2">  <CheckOutlined />Submit</div>
                 
                </button>
                ) : juniorOfficer?.account_status === "deactive" ||
                record?.isexpired === "Avaiable" ? (
                <button
                  className={`cursor-not-allowed my-3 p-2 rounded border text-blue-700`}
                  disabled
                >
                  <div className="flex gap-2">  <CheckOutlined /> Submit (Deactive)</div>

                </button>
              ) : null}


        
        </>
        );
      },
    },
  
    { title: "Appliction Expired date", dataIndex: `${"isexpired"}` },
  ];

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <Spin size="large" />
        </div>
      )}
      <div className="mx-24 mt-20 flex items-center gap-4">
        <div>
          <span className="font-bold text-[20px]">Account Type:</span>
          <span className="bg-indigo-600 rounded mx-4 py- px-1 text-white text-[18px] uppercase">
            {role}
          </span>
        </div>
        <p className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <FlagOutlined className="text-[30px] text-red-600" />
          <span className="sr-only">Notifications</span>
          <div
            className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900 
            ${
              juniorOfficer?.flags >= 3
                ? "bg-red-600"
                : juniorOfficer?.flags === 2
                ? "bg-yellow-400"
                : juniorOfficer?.flags === 1
                ? "bg-green-500"
                : ""
            }`}
          >
            {juniorOfficer.flags}
          </div>
        </p>
        <p>
          Account:{" "}
          <span className="bg-green-600 rounded mx-4 py- px-1 text-white text-[15px] uppercase">
            {juniorOfficer?.account_status}
          </span>
        </p>
      </div>
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
  );
}

export default JuniorOfficer;
