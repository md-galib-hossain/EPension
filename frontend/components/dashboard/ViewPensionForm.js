import { EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Divider } from "antd";

export default function ViewPensionForm({ govtData, setOpen, open, role }) {
  const router = useRouter();
  const singleUserData = router.query;

  const matchingGovtData = govtData?.find(
    (item) => item.nidNumber == singleUserData.nidNumber
  );
  console.log(matchingGovtData,"haha")
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={() => setOpen(!open)}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
      >
        <EyeOutlined style={{ color: "green", fontSize: "1.5rem" }} />
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        className={`${
          open ? "block bg-[#009688]" : "hidden"
        } fixed top-30 z-50 w-full p-4 md:inset-0 max-h-full`}
        // h-[calc(100%-1rem)]
        aria-hidden={!open}
      >
        <div
          className={
            role === "juniorOfficer"
              ? "absolute w-full max-w-2xl max-h-full"
              : "absolute w-full max-w-6xl max-h-full"
          }
          style={{
            top: role === "juniorOfficer" ? "10%" : "2%",
            left: role === "juniorOfficer" ? "30%" : "12%",
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
                aria-hidden={!open}
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
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Application Informations
              </h3>
              {/* main flex start */}
              <div className="flex gap-2">
                {/* personal information start */}

                <div className="space-y-6 flex-1">
                  <h3>Personal Information</h3>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Image :
                      <div className="flex items-center justify-center">
                        <img
                          className="w-20 h-20 object-cover rounded-none"
                          src={singleUserData?.profileImage}
                        />
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Full Name :{singleUserData.fullName}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Age :{singleUserData.Age}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Father Name :{singleUserData.fathersName}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Mother Name : {singleUserData.mothersName}
                    </label>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      NID Number : {singleUserData.nidNumber}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email : {singleUserData.email}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Postal Code : {singleUserData.postalcode}
                    </label>
                  </div>

                  {/* <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                </div>
                <Divider type="vertical" className="h-auto mx-4 bg-blue-600" />

                {/* personal information end */}
                {/* professional information start */}
                <div className="space-y-6 flex-1">
                  <h3>Job Information</h3>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Job Post : {singleUserData.jobPost}
                    </label>
                  </div>
              
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Joining Date : {singleUserData.joingDateOffice}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Retired Date : {singleUserData.retiredDate}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Last Basic Salary: {singleUserData.basic_slary}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Bank Account: {singleUserData.bankAccount}
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Department: {singleUserData.jobDepartment}
                    </label>
                  </div>
                </div>
                {/* professional information end */}
                {role === "generalOfficer" || role === "headOficer" && (
                  <Divider
                    type="vertical"
                    className="h-auto mx-4 bg-blue-600"
                  />
                )}

                {/* database information start */}
                {role === "juniorOfficer" ? (
                  ""
                ) : (role === "generalOfficer" || role === "headOfOffice") && matchingGovtData ? (
                  <div
                    className="flex flex-col max-h-[560px] flex-1 overflow-y-auto"
                    style={{
                      // Add a custom style for the scrollbar
                      overflowX: "hidden", // Hide horizontal scrollbar
                      scrollbarWidth: "thin",
                      scrollbarColor: "#f4f4f4", // Adjust the colors as needed
                      WebkitOverflowScrolling: "touch", // Enable smooth scrolling on WebKit browsers
                    }}
                  >
                    {/* govt database flex 1 start here */}
                    <div className="space-y-6 flex-1">
                      <h3 className="text-2xl uppercase">
                        Info from GOVT DATABASE
                      </h3>
                      <h3>Personal Information</h3>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Image :
                          <div className="flex items-center justify-center">
                            <img
                              className="w-20 h-20 object-cover rounded-none"
                              src={matchingGovtData?.profileImage}
                            />
                          </div>
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Full Name :{matchingGovtData?.fullName}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Age :{matchingGovtData?.Age}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Father Name :{matchingGovtData?.fathersName}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Mother Name : {matchingGovtData?.mothersName}
                        </label>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          NID Number : {matchingGovtData?.nidNumber}
                        </label>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Postal Code : {matchingGovtData?.postalcode}
                        </label>
                      </div>

                      <Divider
                        type="horizontal"
                        className="w-auto mx-4 bg-blue-600"
                      />
                    </div>
                    {/* govt database flex 1 end here */}

                    {/* govt database flex 1 start here */}
                    <div className="space-y-6 flex-1">
                      <h3>Job Information</h3>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Job Post : {matchingGovtData?.jobPost}
                        </label>
                      </div>
                 
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Joining Date : {matchingGovtData?.joingDateOffice}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Retired Date : {matchingGovtData?.retiredDate}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Last Basic Salary: {matchingGovtData?.basic_slary}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Bank Account: {matchingGovtData?.bankAccount}
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Department: {matchingGovtData?.jobDepartment}
                        </label>
                      </div>
                    </div>
                    {/* govt database flex 1 end here */}
                  </div>
                ) : (
                  <div>
                    {" "}
                    <h3 className="text-2xl uppercase">
                      Info from GOVT DATABASE
                    </h3>
                    <h3 className="text-xl uppercase text-red-600">
                      There is no matching data with this NID user
                    </h3>
                  </div>
                )}
                {/* database information end */}
              </div>

              {/* main flex end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
