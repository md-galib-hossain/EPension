import React from 'react';

const ComplainTable = ({ reports, handleReportClick, handleReportDelete }) => {
    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-semibold mb-4'>All Reports</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border-b p-2">Id</th>
                        <th className="border-b p-2">FullName</th>
                        <th className="border-b p-2">Subject</th>
                        <th className="border-b p-2">Message</th>
                        {/* <th className="border-b p-2">Status</th> */}
                        <th className="border-b p-2">Complained At</th>
                        {/* <th className="border-b p-2">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {reports.map((complaint) => (
                        <tr key={complaint?._id} className="border-b text-center">
                            <td className="p-2">{complaint?.complain_by}</td>
                            <td className="p-2">{complaint?.fullName}</td>
                            <td className="p-2">{complaint?.complain_title}</td>
                            <td className="p-2">{complaint?.complain_des}</td>
                            {/* <td className={`p-2 ${complaint.status === 'resolved' ? 'text-green-600' : 'text-red-600'}`}>
                                {complaint.status}
                            </td> */}
                            <td className="p-2">{new Date(complaint?.createdAt).toLocaleDateString()}</td>
                            {/* <td className="p-2 flex gap-5 items-center cursor-not-allowed">
                                <button className="bg-blue-500 cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm" onClick={() => handleReportClick(complaint._id)}>View</button>
                                <button className="bg-red-500 cursor-not-allowed hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm" onClick={() => handleReportDelete(complaint._id)}>Delete</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplainTable;
