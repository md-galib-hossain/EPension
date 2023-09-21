import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined, DownloadOutlined, EyeOutlined, EditOutlined, BellOutlined } from '@ant-design/icons';
import { Button, Steps, message, theme } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import jsPDF from 'jspdf';
import { fetchAllPensionFormData } from '@/app/feature/pensionData/pensionFormSlice';

function PensionHolder() {
    const [localStorage_user_id, setLocalStorage_user_id] = useState();
    const [role, setRole] = useState('');
    const [user, setUser] = useState();
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAllPensionFormData());
    }, [dispatch]);

    // Access the state using useSelector
    const allPensionFormData = useSelector((state) => state.allFormReducer?.allPensionFormData);
    // Match userId in PensionForm
    const matchingUser = allPensionFormData?.find((user) => user.user === localStorage_user_id);
    console.log("matchingUser: ", matchingUser);

    // Get userId form Localhost
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user)
        const role = user?.role
        setRole(role);
        setLocalStorage_user_id(user._id);
    }, []);



    const handleVIew = () => {
        setToggle(!toggle);
    }


    // All Procces step
    const description1 = `${matchingUser?.status === "rejected" ? 'Your application has been Rejected' : ' Your Application is under process.'}`;
    const description2 = 'Your Application is on Junior Officer';
    const description3 = 'Your Application is on Assistance General Officer.';
    const description4 = `${matchingUser?.status === "rejected" ? 'Your application has been Rejected' : ' Your Application is under process.'}`;
    const description5 = 'Your Application is Approved.';

    // Pension process System
    const pensionProcess = (
        <div className='pb-32 pt-10 px-12'>
            <div className='pb-8 text-2xl text-center uppercase font-serif font-semibold text-gray-500'>
                Tracking on your application
            </div>
            {matchingUser?.status === "rejected" ?
                <>
                    <div className=' mb-8 text-center bg-red-50 w-1/5 mx-auto py-6'>
                        <p> <BellOutlined style={{ fontSize: "30px", color: "red" }} /></p>
                        Application rejected by <span className='text-red-400 font-semibold'>{matchingUser?.rejected_by_role}</span>
                        <p className=' text-yellow-400 mb-10 text-center'>{matchingUser?.rejectionReason}</p>
                    </div>
                </>
                :
                ""
            }
            <Steps
                style={{ width: '85%', margin: '0 auto', fontFamily: 'sans-serif' }}
                current={
                    matchingUser?.process_status_by_role === "juniorOfficer" ? 1 :
                        matchingUser?.process_status_by_role === "assistantGeneral" && matchingUser?.status === "pending" ? 3 :
                            matchingUser?.process_status_by_role === "assistantGeneral" || matchingUser?.status === "approved" ? 4 : 0
                }
                items={[
                    {
                        title: 'In Progress',
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
            />
        </div>
    )

    // Pension Application form
    const applySection = (
        <div>
            <div className="p-4 md:w-1/3 m-auto pt-32">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 384 512"><path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" /></svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            Apply for pension
                        </h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                            Applying for pension is the foundation of your financial security in retirement. Your future self will thank you for applying for pension today.
                        </p>
                        <Link href={"/pension-form"} className="mt-3 text-indigo-500 inline-flex items-center">
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
    )

    const viewData = (
        <div className="pb-20" style={{ width: "85%", margin: "auto", textAlign: "center", fontFamily: "sans-serif" }}>
            <h2 className='text-[20px]'>Pension Holder Information:</h2>
            <table className="w-full mt-4">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 px-4">Field</th>
                        <th className="py-2 px-4">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border py-2 px-4">Name</td>
                        <td className="border py-2 px-4">{user?.name}</td>
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
                        <td className="border py-2 px-4">NID Number</td>
                        <td className="border py-2 px-4">{matchingUser?.nidNumber}</td>
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
                        <td className="border py-2 px-4">{matchingUser?.joingDateOffice}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4">Retirement Date</td>
                        <td className="border py-2 px-4">{matchingUser?.retiredDate}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4">Basic Salary</td>
                        <td className="border py-2 px-4">{matchingUser?.basic_slary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

    const renderData = (
        <div className="container w-full mx-auto pt-12 pb-32">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

                <div className="flex justify-center ">
                    {/*Metric Card*/}
                    <div className="flex gap-16">
                        <div className=" bg-white border rounded shadow pr-4 flex flex-row items-center " onClick={() => handleVIew()}>
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-gray-900">
                                    <EyeOutlined className='text-white text-2xl' />
                                </div>
                            </div>
                            <div className="flex-1 text-center">
                                <h5 className="font-bold uppercase text-gray-500">
                                    View  Your Application Form
                                </h5>
                            </div>
                        </div>
                        <Link href={{
                            pathname: '/pension-form',
                            query: matchingUser,
                        }}>
                            {
                                matchingUser?.status !== "approved" ?
                                    <div className=" bg-white border rounded shadow pr-4  flex flex-row items-center ">
                                        <div className="flex-shrink pr-4">
                                            <div className="rounded p-3 bg-teal-700">
                                                <EditOutlined className='text-white text-2xl' />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-center">
                                            <h5 className="font-bold uppercase text-gray-500">
                                                Edit Your Application Form
                                            </h5>
                                        </div>
                                    </div> : null
                            }
                        </Link>
                        {matchingUser?.status === "approved" ? <div className=" bg-white border rounded shadow  flex flex-row items-center pr-4 " onClick={() => handleDownloadPDF()}>
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-green-600">
                                    <DownloadOutlined className='text-white text-2xl' />
                                </div>
                            </div>
                            <div className="flex-1 text-center">
                                <h5 className="font-bold uppercase text-gray-500">
                                    Download Your Application Form
                                </h5>
                            </div>
                        </div> : null}
                    </div>
                </div>

            </div>
        </div>
    )

    const accuntType = (
        <div className="mx-32 mt-20 flex justify-between gap-5">
            <div>
                <span className='font-bold text-[18px]' >
                    Account Type:
                </span>
                <span className='bg-indigo-600 rounded py- px-1 text-white text-[18px] uppercase'>
                    {role}
                </span>
            </div>
            <div>
                <Link href={'/complain'} className='font-bold bg-green-500 p-2  text-gray-50 text-[18px]' >
                    Add Complain
                </Link>
            </div>
        </div>
    )



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


    // bujhinai
    const data = [];
    for (let years = 9; years <= 25; years++) {
        const currentAmount = 32 + (years - 9) * 3;
        const redeciteAmount = 33 + (years - 9) * 3;
        data.push({ age: `${years} years`, currentAmount: `${currentAmount}%`, redeciteAmount: `${redeciteAmount}%` });
    }


    // Calculate the percentage of currentAmount and redeciteAmount based on yearDifference
    const currentAmountPercentage = 32 + (yearDifference - 9) * 3;
    const redeciteAmountPercentage = 33 + (yearDifference - 9) * 3;

    console.log("currentAmountPercentage: ", currentAmountPercentage);
    console.log("redeciteAmountPercentage: ", redeciteAmountPercentage);

    // Calculate pension using the provided formula
    console.log(`haha${matchingUser?.basic_slary , currentAmountPercentage} / 2 + 1500`);
    const currentpension = ((matchingUser?.basic_slary * currentAmountPercentage)/100) / 2 + 1500;
    const redecitepension = ((matchingUser?.basic_slary * redeciteAmountPercentage)/100) / 2 + 1500;


    const date = new Date();
    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
    // Download PDF
    const handleDownloadPDF = () => {
        // Create a new jsPDF instance
        const pdf = new jsPDF();
        const content = `
            Pension Holder Information:
                      -----------
            Your application has been : ${matchingUser.status} Successfully!
                      -----------
            total year of service : ${yearDifference}
            Last Basic Salary: ${matchingUser?.basic_slary}
            your Current Pension total : ${currentpension}
            Pension of Date : ${currentDate}

            Join Date: ${matchingUser?.joingDateOffice}
            Retirement Date: ${matchingUser?.retiredDate}
            `

        // Add the content to the PDF
        pdf.text(content, 10, 10);

        // Save the PDF with a filename
        pdf.save('PensionHolderInfo.pdf');
    };


    // Pension Calculations Information
    const PensionTable = (
        <div className="pb-10" style={{ width: "70%", margin: "auto", textAlign: "center", fontFamily: "sans-serif" }}>
            <h2 className='text-[20px]'>Pension Calculations Information:</h2>
            <table className="w-full mt-4">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 px-4">Age of pension</th>
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
                    <tr>
                        <td className="border py-2 px-4">.</td>
                        <td className="border py-2 px-4">.</td>
                        <td className="border py-2 px-4">.</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4">For {yearDifference} years your monthly Pension : </td>
                        <td className="border py-2 px-4">{currentAmountPercentage}% = {currentpension}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className='py-10'>Monthly Pension = (Last Basic Salary * Percentage) / 2 + 1500</h2>
        </div>
    )


    return <>
        {/* When user not apply pension form then show "applySection" section */}
        {accuntType}
        {/* When user apply pension form then show "pensionProcess" System */}
        {(matchingUser !== undefined) ? pensionProcess : applySection}
        {/* pentionCalculations */}
        {(matchingUser !== undefined) ? PensionTable : ""}
        {/* When process system done then show "pensionProcess" System */}
        {matchingUser ? renderData : ""}

        {toggle && <div> {viewData} </div>}
    </>;
}

export default PensionHolder;

