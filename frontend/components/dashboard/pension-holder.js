import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  DownloadOutlined,
  EyeOutlined,
  EditOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Button, Steps, message, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import jsPDF from "jspdf";
import { fetchAllPensionFormData } from "@/app/feature/pensionData/pensionFormSlice";
import ProcessSteps from "./ProcessSteps";

function PensionHolder() {
  const [localStorage_user_id, setLocalStorage_user_id] = useState();
  const [role, setRole] = useState("");
  const [user, setUser] = useState();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPensionFormData());
  }, [dispatch]);

  // Access the state using useSelector
  const allPensionFormData = useSelector(
    (state) => state.allFormReducer?.allPensionFormData
  );
  // Match userId in PensionForm
  const matchingUser = Array.isArray(allPensionFormData)
    ? allPensionFormData?.find((user) => user.user === localStorage_user_id)
    : null;
  console.log("matchingUser: ", matchingUser);

  // Get userId form Localhost
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    const role = user?.role;
    setRole(role);
    setLocalStorage_user_id(user._id);
  }, []);

  const handleVIew = () => {
    setToggle(!toggle);
  };

  // // All Procces step
  // const description1 = `${matchingUser?.status === "rejected" ? 'Your application has been Rejected' : ' Your Application is under process.'}`;
  // const description2 = 'Your Application is on Junior Officer';
  // const description3 = 'Your Application is on Assistance General Officer.';
  // const description4 = `${matchingUser?.status === "rejected" ? 'Your application has been Rejected' : ' Your Application is under process.'}`;
  // const description5 = 'Your Application is Approved.';

  // Pension process System
  const pensionProcess = (
    <div className="pb-32 pt-10 px-12">
      <div className="pb-8 text-2xl text-center uppercase font-serif font-semibold text-gray-500">
        Tracking on your application
      </div>

      {/* rejection reason */}
      {matchingUser?.status === "rejected" ? (
        <>
          <div className="w-1/4 mb-20 text-center bg-red-50 w-1/5 mx-auto p-6">
            <p>
              {" "}
              <BellOutlined style={{ fontSize: "30px", color: "red" }} />
            </p>
            Application rejected by{" "}
            <span className="text-red-400 font-semibold">
              {matchingUser?.rejected_by_role}
            </span>
            <p className=" text-yellow-400  text-center">
              {matchingUser?.rejectionReason}
            </p>
          </div>
        </>
      ) : (
        ""
      )}

      {/* expired status */}
      {matchingUser?.from_expired_out[0]?.isexpired === true ? (
        <>
          <div className="w-1/4 mb-20 text-center bg-red-50 w-1/5 mx-auto p-6">
            <p>
              {" "}
              <BellOutlined style={{ fontSize: "30px", color: "red" }} />
            </p>
            {matchingUser?.process_status_by_role} didn't responded your
            application in time
            <br />
            <p className="text-green-600">
              {" "}
              You can Complain to Head Of Office
            </p>
          </div>
        </>
      ) : (
        ""
      )}

      {/* <Steps
                style={{ width: '85%', margin: '0 auto', fontFamily: 'sans-serif' }}
                current={
                    matchingUser?.process_status_by_role === "juniorOfficer" ? 1 :
                        matchingUser?.process_status_by_role === "assistantGeneral" && matchingUser?.status === "pending" ? 3 :
                            matchingUser?.process_status_by_role === "assistantGeneral" || matchingUser?.status === "approved" ? 4 : 0
                }
                items={[
                    {
                        title: 'In Process',
                        description: description1,
                        // subTitle: 'Left 00:00:08',
                    },
                    {
                        title: 'Junior Officer',
                        description: description2,
                    },
                    {
                        title: 'In Process',
                        description: description4,
                    },
                    {
                        title: 'Assistance General',
                        description: description3,
                    },
                   
                    {
                        title: 'Approved',
                        description: description5,
                    },
                ]}
            /> */}
      <ProcessSteps
        statusByRole={matchingUser?.process_status_by_role}
        applicationStatus={matchingUser?.status}
      ></ProcessSteps>
    </div>
  );

  // Pension Application form
  const applySection = (
    <div>
      <div className="p-4 md:w-1/3 m-auto pt-32">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Apply for pension
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              Applying for pension is the foundation of your financial security
              in retirement. Your future self will thank you for applying for
              pension today.
            </p>
            <Link
              href={"/pension-form"}
              className="mt-3 text-indigo-500 inline-flex items-center"
            >
              Apply Now
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const viewData = (
    <div
      className="pb-20"
      style={{
        width: "85%",
        margin: "auto",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h2 className="text-[20px]">Pension Holder Information:</h2>
      <table className="w-full mt-4">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4">Field</th>
            <th className="py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border py-2 px-4">Image</td>
            <td className="border py-2 px-4 flex items-center justify-center">
              <img
                className="w-16 h-16 object-cover rounded-none"
                src={matchingUser?.profileImage}
              />
            </td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Name</td>
            <td className="border py-2 px-4">{matchingUser?.fullName}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Age</td>
            <td className="border py-2 px-4">{matchingUser?.Age}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Father's Name</td>
            <td className="border py-2 px-4">{matchingUser?.fathersName}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Mother's Name</td>
            <td className="border py-2 px-4">{matchingUser?.mothersName}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Current Address</td>
            <td className="border py-2 px-4">{matchingUser?.currentAddress}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Permanent Address</td>
            <td className="border py-2 px-4">
              {matchingUser?.permanentAddress}
            </td>
          </tr>
          <tr>
            <td className="border py-2 px-4">NID Number</td>
            <td className="border py-2 px-4">{matchingUser?.nidNumber}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Contact Number</td>
            <td className="border py-2 px-4">{matchingUser?.contactNumber}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Email</td>
            <td className="border py-2 px-4">{matchingUser?.email}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Postal Code</td>
            <td className="border py-2 px-4">{matchingUser?.postalcode}</td>
          </tr>
          {/* <tr>
                        <td className="border py-2 px-4">Retirement Address</td>
                        <td className="border py-2 px-4">{matchingUser?.retried_address}</td>
                    </tr> */}
          <tr>
            <td className="border py-2 px-4">Join Date</td>
            <td className="border py-2 px-4">
              {matchingUser?.joingDateOffice}
            </td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Retirement Date</td>
            <td className="border py-2 px-4">{matchingUser?.retiredDate}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Basic Salary</td>
            <td className="border py-2 px-4">{matchingUser?.basic_slary}</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">Job Post</td>
            <td className="border py-2 px-4">{matchingUser?.jobPost}</td>
          </tr>

          <tr>
            <td className="border py-2 px-4">Bank Account</td>
            <td className="border py-2 px-4">{matchingUser?.bankAccount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderData = (
    <div className="container w-full mx-auto pt-12 pb-32">
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <div className="flex justify-center ">
          {/*Metric Card*/}
          <div className="flex gap-16">
            <div
              className=" bg-white border rounded shadow pr-4 flex flex-row items-center "
              onClick={() => handleVIew()}
            >
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-gray-900">
                  <EyeOutlined className="text-white text-2xl" />
                </div>
              </div>
              <div className="flex-1 text-center">
                <h5 className="font-bold uppercase text-gray-500">
                  View Your Application Form
                </h5>
              </div>
            </div>
            <Link
              href={{
                pathname: "/pension-form",
                query: matchingUser,
              }}
            >
              {matchingUser?.status !== "approved" ? (
                <div className=" bg-white border rounded shadow pr-4  flex flex-row items-center ">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-teal-700">
                      <EditOutlined className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Edit Your Application Form
                    </h5>
                  </div>
                </div>
              ) : null}
            </Link>
            {matchingUser?.status === "approved" ? (
              <div
                className=" bg-white border rounded shadow  flex flex-row items-center pr-4 "
                onClick={() => handleDownloadPDF()}
              >
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-green-600">
                    <DownloadOutlined className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Download Your Pension Ticket
                  </h5>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  const accuntType = (
    <div className="mx-32 mt-20 flex justify-between gap-5">
      <div>
        <span className="font-bold text-[18px]">Account Type:</span>
        <span className="bg-indigo-600 rounded py- px-1 text-white text-[18px] uppercase">
          {role}
        </span>
      </div>
      <div>
        <Link
          href={"/complain"}
          className="font-bold bg-green-500 p-2  text-gray-50 text-[18px]"
        >
          Add Complain
        </Link>
      </div>
    </div>
  );

  // Calculate pension using the provided formula and show in table format
  const joinDate = new Date(matchingUser?.joingDateOffice);
  const retirementDate = new Date(matchingUser?.retiredDate);
  // Calculate the difference in years
  const yearDifference = retirementDate.getFullYear() - joinDate.getFullYear();
  // console.log("yearDifference: ", yearDifference);

  // Create an array of objects representing the data
  // const data = [
  //     { age: '9 years', currentAmount: '32%', redeciteAmount: '36%' },
  //     { age: '10 years', currentAmount: '35%', redeciteAmount: '39%' },
  //     { age: '11 years', currentAmount: '38%', redeciteAmount: '43%' },
  //     { age: '12 years', currentAmount: '42%', redeciteAmount: '47%' },
  //     { age: '13 years', currentAmount: '45%', redeciteAmount: '51%' },
  //     { age: '14 years', currentAmount: '48%', redeciteAmount: '54%' },
  // ];

  const data = [];
  for (let years = 10; years <= 25; years++) {
    // 36 is the starting percentage and 10 is the starting years
    // in each age there are 3% difference
    const currentAmount = 36 + (years - 10) * 3;
    data.push({
      age: `${years} years`,
      currentAmount: `${currentAmount}%`,
    });
  }

  // calculating monthly pension start
  // Calculate the percentage of currentAmount based on yearDifference
  const currentAmountPercentage = 36 + (yearDifference - 10) * 3;
  // console.log("currentAmountPercentage: ", currentAmountPercentage);

  // Calculate pension using the provided formula
  // console.log(`haha${matchingUser?.basic_slary , currentAmountPercentage} / 2 + 1500`);
  const fixedGratitude230 = yearDifference >= 20 && 230;
  const fixedGratitude245 = yearDifference >= 15 && 245;
  const fixedGratitude260 = yearDifference >= 10 && 260;

  const currentpension =
    (matchingUser?.basic_slary * currentAmountPercentage) / 100 / 2 + 1500;
  const currentGratitude =
    ((matchingUser?.basic_slary * currentAmountPercentage) / 100 / 2) *
    fixedGratitude230 ||
    fixedGratitude245 ||
    fixedGratitude260;

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const retireddate = new Date(matchingUser?.retiredDate);
  let retiredday = retireddate.getDate();
  let retiredmonth = retireddate.getMonth() + 1;
  let retiredyear = retireddate.getFullYear();
  let retiredDate = `${retiredday}-${retiredmonth}-${retiredyear}`;
  const joingdate = new Date(matchingUser?.joingDateOffice);
  let joingday = joingdate.getDate();
  let joingmonth = joingdate.getMonth() + 1;
  let joingyear = joingdate.getFullYear();
  let joingDate = `${joingday}-${joingmonth}-${joingyear}`;

  // new function total pension with that haven't withdrawn yet start
  // Convert the retirement date and current pension date to Date objects
  const retiredDateParts = retiredDate.split("-").map(Number);
  const currentPensionDateParts = currentDate.split("-").map(Number);

  const retiredDateObj = new Date(
    retiredDateParts[2],
    retiredDateParts[1] - 1,
    retiredDateParts[0]
  );
  const currentPensionDateObj = new Date(
    currentPensionDateParts[2],
    currentPensionDateParts[1] - 1,
    currentPensionDateParts[0]
  );

  // // Calculate the total difference in months
  // const monthsDiff =
  //   (currentPensionDateObj.getFullYear() - retiredDateObj.getFullYear()) * 12 +
  //   (currentPensionDateObj.getMonth() - retiredDateObj.getMonth());

  // // Calculate totalPension based on the difference in months (total monthly difference)
  // const totalPension =
  //   monthsDiff !== 0 ? currentpension * monthsDiff : currentpension;

  //new function total pension with that haven't withdrawn yet end

  // Download PDF
  const handleDownloadPDF = () => {
    //     Total Pension (from retirement to current date): ${totalPension}

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Calculate the x-coordinate for centering the image
    const pdfWidth = pdf.internal.pageSize.width;
    const imgWidth = 40; // Adjust this based on the actual width of your image
    const xCoordinate = (pdfWidth - imgWidth) / 2;

    // Add image to the top center
    const imgData2 = "https://i.ibb.co/ZVQYjkV/pngegg-1.png"; // Replace with your image data
    pdf.addImage(imgData2, "PNG", xCoordinate, 20, 40, 40); // Adjust the coordinates and dimensions as needed

    // Add image to a little more above the bottom right side
    const imgData = "https://i.ibb.co/CtGMnMQ/pngegg.png"; // Replace with your image data
    pdf.addImage(imgData, "JPEG", 150, 230, 40, 40); // Adjust the coordinates and dimensions as needed

    // Set font size and style
    pdf.setFontSize(12); // Adjust the font size as needed
    pdf.setFont("times", "normal"); // You can use other professional fonts like "times", "arial", etc.

    // Add the content to the PDF after the image
    const content = `

    Pensioner Information Notice
    -----------------------------

    Dear ${matchingUser?.fullName},

    This is to inform you that your pension application has been successfully processed, 
    and your Pension Book is now ready for collection at your local pension office. 
    Please find below the details of your pension account:

    Pension Holder Information:
    ---------------------------
    Application Status: ${matchingUser.status}
    You may now proceed to collect your Pension Book from your designated pension office.

    Important Details:
    -------------------
    Total Years of Service: ${yearDifference}
    Last Basic Salary: ${matchingUser?.basic_slary}
    Monthly Pension: ${currentpension}
    Gratitude: ${currentGratitude}
    Pension Book Issuance Date: ${currentDate}

    Employment Dates:
    -----------------
    Joining Date: ${joingDate}
    Retirement Date: ${retiredDate}

    Please carry a valid identification (NID) document and this ticket when collecting your Pension Book.

    Your cooperation is appreciated, and we congratulate you on your retirement.

  
    Date
    ${currentDate}
`;
    //   [Government Department Name]
    // [Contact Information]
    // [Address]

    // Add the content to the PDF after the image
    pdf.text(content, 10, 70);

    // Save the PDF with a filename
    pdf.save("PensionHolderInfo.pdf");
  };

  // Pension Calculations Information
  const PensionTable = (
    <div
      className="pb-10"
      style={{
        width: "70%",
        margin: "auto",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h2 className="text-[20px] text-4xl">
        Pension Calculations Information:
      </h2>

      <p className="text-xl">
        Government Servants Pension Simplification Order, 2020
      </p>
      <p className="text-[#009688]">
        ------- Go to 57 page of the Reference PDF -------
      </p>

      <div className="my-4 mx-auto w-1/4 bg-[#0E364A] text-white py-2">
        <Link
          className=""
          target="blank"
          href={
            "https://mof.gov.bd/site/notices/abe27e3a-4866-4a0c-9402-a5eb7fe6659f/%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%87%E0%A6%A8%E0%A6%B6%E0%A6%A8-%E0%A6%B8%E0%A6%B9%E0%A6%9C%E0%A7%80%E0%A6%95%E0%A6%B0%E0%A6%A3-%E0%A6%86%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A6"
          }
        >
          Reference of this table calculation{" "}
        </Link>
      </div>

      <table className="w-full mt-4">
        <thead>
          <tr className="bg-[#009688] text-white">
            <th className="py-2 px-4">Length of Employment</th>
            <th className="py-2 px-4">Pension Percentages</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{item.age}</td>
              <td className="border py-2 px-4">{item.currentAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="py-10">
        Monthly Pension = (Last Basic Salary * Pension Percentage from above
        table) / 2 + Medical Treatment Fees
      </h2>
      <h2 className="pb-10">
        Gratitude = (Last Basic Salary * Pension Percentage from above table) /
        2 * Gratitude Percentage
      </h2>
      <div className="py-10 bg-[#009688] text-white">
        <p> Your Monthly Pension : {Math.floor(currentpension)}</p>
        <p> Your Gratitude : {Math.floor(currentGratitude)}</p>
        {/* <p>
          Total Pension From Retirement to Application Date:
          {Math.floor(totalPension)}
        </p> */}
      </div>
    </div>
  );

  return (
    <>
      {/* When user not apply pension form then show "applySection" section */}
      {accuntType}
      {/* When user apply pension form then show "pensionProcess" System */}
      {matchingUser !== undefined ? pensionProcess : applySection}
      {/* pentionCalculations */}
      {matchingUser !== undefined ? PensionTable : ""}
      {/* When process system done then show "pensionProcess" System */}
      {matchingUser ? renderData : ""}

      {toggle && <div> {viewData} </div>}
    </>
  );
}

export default PensionHolder;
