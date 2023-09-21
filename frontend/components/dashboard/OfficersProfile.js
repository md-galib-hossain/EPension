import { useDispatch, useSelector } from 'react-redux';
import { AddAssistantGeneralFlag, AddJuniorOfficerFlag, accountStatusUpdate, decreaseAssistantGeneralFlag, decreaseJuniorOfficerFlag } from '@/app/feature/headOfficer/headOfficerSlice';
import React, { useEffect } from 'react';


const OfficersProfile = ({ role, applications, assistantGeneral, juniorOfficer, onAddFlagClick }) => {
    const dispatch = useDispatch();
    const { Officers, reports } = useSelector((state) => state.headOfficer);

    const handleAssistantGeneralFlagClick = async (id) => {
        try {
            // Pass an object with id and flags
            dispatch(AddAssistantGeneralFlag({ id, flags: 1 }));
            window.location.reload();
        } catch (err) {
            console.error('Error adding Assistant General Flag:', err);
        }
    };

    const handleJuniorOfficerFlagClick = async (id) => {
        try {
            dispatch(AddJuniorOfficerFlag({ id, flags: 1 }));
            window.location.reload();
        } catch (err) {
            console.error('Error adding Junior Officer Flag:', err);
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


    return (
        <div>
            <div className='my-10'>
                <h2 className="text-2xl font-semibold mb-4">All Pension Applications </h2>
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
                                Submiison date
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
                            {/* <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {applications?.map((application) => (
                            <>
                                <tr key={applications?._id}>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.user}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.fullname}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.created}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.approvalDate}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.rejectionDate}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.process_status_by_role}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {application?.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
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
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='my-10'>
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
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Number of Complaints
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Add Flags
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
                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">
                                        Total: {assistantGeneral.numOfComplain}<br />
                                        Resolved: {assistantGeneral.numOfComplainResolved}<br />
                                        Unresolved: {assistantGeneral.numOfComplainUnresolved}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap flex gap-4">
                                    {/* Add Flag Button */}
                                    <button
                                        onClick={() => handleAssistantGeneralFlagClick(assistantGeneral._id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                                    >
                                        Add Flag
                                    </button>
                                    {/* Edit Flag Button */}
                                    <button
                                        onClick={() => generalDecreaseFlagClick(assistantGeneral._id)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                    >
                                        Remove Flag
                                    </button>
                                    {
                                        assistantGeneral.account_status === "active" ?

                                            <button
                                                onClick={() => handleAccountStatus({ id: assistantGeneral._id, Status: assistantGeneral.account_status })}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                            >
                                                Deactive
                                            </button>
                                            :
                                            <button
                                                onClick={() => handleAccountStatus({ id: assistantGeneral._id, Status: assistantGeneral.account_status })}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                            >
                                                Active
                                            </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='my-10'>
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
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Number of Complaints
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Add Flags
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
                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">
                                        Total: {juniorOfficer.numOfComplain}<br />
                                        Resolved: {juniorOfficer.numOfComplainResolved}<br />
                                        Unresolved: {juniorOfficer.numOfComplainUnresolved}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap flex gap-4">
                                    {/* Add Flag Button */}
                                    <button
                                        onClick={() => handleJuniorOfficerFlagClick(juniorOfficer._id)}
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
                                    {
                                        juniorOfficer.account_status === "active" ?

                                            <button
                                                onClick={() => handleAccountStatus({ id: juniorOfficer._id, Status: juniorOfficer.account_status })}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                            >
                                                Deactive
                                            </button>
                                            :
                                            <button
                                                onClick={() => handleAccountStatus({ id: juniorOfficer._id, Status: juniorOfficer.account_status })}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                            >
                                                Active
                                            </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default OfficersProfile;
