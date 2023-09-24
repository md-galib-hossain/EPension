import React from 'react'

const approvedDate = ({inputDate,rejectionDate}) => {
    const date = new Date(inputDate);
console.log('input in',inputDate)
// jodi date nan value ashe tahole ui te dekhabena
if (!isNaN(date)) {
    // Extract day, month, and year components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Format the date as "dd/mm/yyyy"
    const formattedDate = `${day}/${month}/${year}`;
    console.log('approved in', formattedDate);

    return (
      <div className="text-sm leading-5 text-gray-900">
        {formattedDate}
      </div>
    );
  } else {
    // Return null if the date is not valid
    return (
    null 
    )
  }
};
export default approvedDate

// import React from 'react';

// const ApprovedDate = ({ inputDate, rejectionDate }) => {
//   const inputDateObj = new Date(inputDate);
//   const rejectionDateObj = new Date(rejectionDate);

//   // Check if inputDate and rejectionDate are valid dates (not NaN)
//   if (!isNaN(inputDateObj) && !isNaN(rejectionDateObj)) {
//     // Extract day, month, and year components for inputDate
//     const inputDay = String(inputDateObj.getDate()).padStart(2, '0');
//     const inputMonth = String(inputDateObj.getMonth() + 1).padStart(2, '0');
//     const inputYear = inputDateObj.getFullYear();

//     // Format the input date as "dd/mm/yyyy"
//     const formattedInputDate = `${inputDay}/${inputMonth}/${inputYear}`;

//     // Extract day, month, and year components for rejectionDate
//     const rejectionDay = String(rejectionDateObj.getDate()).padStart(2, '0');
//     const rejectionMonth = String(rejectionDateObj.getMonth() + 1).padStart(2, '0');
//     const rejectionYear = rejectionDateObj.getFullYear();

//     // Format the rejection date as "dd/mm/yyyy"
//     const formattedRejectionDate = `${rejectionDay}/${rejectionMonth}/${rejectionYear}`;

//     return (
//       <div className="text-sm leading-5 text-gray-900">
//         {formattedInputDate}
     
//       </div>
//     );
//   } else if (!isNaN(inputDateObj)) {
//     // Only inputDate is valid, show only approved date
//     const inputDay = String(inputDateObj.getDate()).padStart(2, '0');
//     const inputMonth = String(inputDateObj.getMonth() + 1).padStart(2, '0');
//     const inputYear = inputDateObj.getFullYear();

//     const formattedInputDate = `${inputDay}/${inputMonth}/${inputYear}`;

//     return (
//       <div className="text-sm leading-5 text-gray-900">
//         {formattedInputDate}
//       </div>
//     );
//   } else if (!isNaN(rejectionDateObj)) {
//     // Only rejectionDate is valid, show only rejection date
//     const rejectionDay = String(rejectionDateObj.getDate()).padStart(2, '0');
//     const rejectionMonth = String(rejectionDateObj.getMonth() + 1).padStart(2, '0');
//     const rejectionYear = rejectionDateObj.getFullYear();

//     const formattedRejectionDate = `${rejectionDay}/${rejectionMonth}/${rejectionYear}`;

//     return (
//       <div className="text-sm leading-5 text-red-600">
// Reponded with Rejection      </div>
//     );
//   } else {
//     // Neither inputDate nor rejectionDate is valid, show "Waiting for response"
//     return (
//       <div className="text-sm leading-5 text-orange-800">
//         Waiting for response
//       </div>
//     );
//   }
// };

// export default ApprovedDate;
