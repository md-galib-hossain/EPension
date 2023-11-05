import React from 'react';
import { FileTextOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function ViewTestimonial({ testimonialImage,setTestimonialOpen, testimonialOpen }) {

  const closeModal = () => {
    setTestimonialOpen(false);
  };
  const router = useRouter();

  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={() => setTestimonialOpen(!testimonialOpen)}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
      >
        <FileTextOutlined style={{ fontSize: "1.5rem" }} />
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        className={`${
          testimonialOpen ? "block bg-[#009688]" : "hidden"
          } fixed top-30 z-50 w-full p-4 md:inset-0 max-h-full`}
        aria-hidden={!testimonialOpen}
      >
        <div
          className="absolute w-full max-w-2xl max-h-full"
          style={{
            top: "10%",
            left: "30%",
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
                aria-hidden={!testimonialOpen}
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

            <div className="flex justify-center items-center p-4">
              <img src={testimonialImage} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
