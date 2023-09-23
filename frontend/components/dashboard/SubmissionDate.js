import React from 'react'

const SubmissionDate = ({inputDate}) => {
    const date = new Date(inputDate);

  // Extract day, month, and year components
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  // Format the date as "dd/mm/yyyy"
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className="text-sm leading-5 text-gray-900">
        {formattedDate}
        </div>
  )
}

export default SubmissionDate