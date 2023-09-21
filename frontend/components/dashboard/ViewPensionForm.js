import { EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function ViewPensionForm({ setOpen, open }) {
    const router = useRouter();
    const singleUserData = router.query;

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <!-- Modal toggle --> */}
            <button onClick={() => setOpen(!open)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button">
                <EyeOutlined style={{ color: "green", fontSize: "1.5rem" }} />
            </button>

            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabIndex="-1" className={`${open ? 'block bg-gray-100' : 'hidden'} fixed top-30 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                aria-hidden={!open}
            >
                <div className="absolute w-full max-w-md max-h-full" style={{
                    top: "30%",
                    left: "40%",
                }}>
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden={!open} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Application Informations</h3>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father Name :
                                        {singleUserData.fathersName}</label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Mother Name : {singleUserData.mothersName}
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                       Last Basic Salary: {singleUserData.basic_slary}
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        NID Number : {singleUserData.nidNumber}
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Postal Code : {singleUserData.postalcode}
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Retired Date : {singleUserData.retiredDate}
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        status : {singleUserData.status}
                                    </label>
                                </div>
                                {/* <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
