import React from 'react'

const approvedDate = ({inputDate}) => {
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
    return null;
  }
};
export default approvedDate