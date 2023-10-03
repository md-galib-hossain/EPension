import React from 'react'
import { FileUnknownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
export default function ViewReason({setOpenReason, openReason,rejectionReason,rejected_by_role}) {
    
  const closeModal = () => {
    setOpenReason(false);
  };
  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={() => setOpenReason(!openReason)}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
      >
        <FileUnknownOutlined style={{ fontSize: "1.5rem" }}/>
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        className={`${
          openReason ? "block bg-[#009688]" : "hidden"
        } fixed top-30 z-50 w-full p-4 md:inset-0 max-h-full`}
        // h-[calc(100%-1rem)]
        aria-hidden={!openReason}
      >
        <div
          className="absolute w-full max-w-2xl max-h-full"
             style={{
            top:"10%",
            left:"30%",
          }}
        >
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden={!openReason}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="px-6 py-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
               Rejection Reason
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Rejected By
              </th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
           
                <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {rejectionReason}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {rejected_by_role}
                    </div>
                  </td>
                 
                  </tr>
                  </tbody>
                </table>
                    </div>
                    </div>
                    </div>
                    </div>
</div>
  )
}
