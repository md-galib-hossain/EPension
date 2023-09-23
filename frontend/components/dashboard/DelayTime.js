import React from 'react'

const DelayTime = ({time,rejectionDate,applicationStatus}) => {
  
// Parse the past date into a Date object
const pastDate = new Date(time);

// Get the current date
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDifference = currentDate - pastDate;

// Convert milliseconds to days
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

// Round the days to the nearest whole number
const roundedDaysDifference = Math.round(daysDifference);

console.log(`Difference in days: ${roundedDaysDifference}`,rejectionDate,applicationStatus);

const shouldShowUI = !rejectionDate && applicationStatus === "pending";

  return shouldShowUI ? (
    <div className={roundedDaysDifference > 3 ? "text-sm leading-5 text-red-600" : "text-sm leading-5 text-gray-900"}>
      {roundedDaysDifference}
    </div>
  ) : (
    <div className="text-sm leading-5 text-green-500">Responded</div>
  );
};

export default DelayTime