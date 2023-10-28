import Link from "next/link";
import React, { useState } from "react";
import { FloatButton } from "antd";
import { LiaLanguageSolid } from "react-icons/lia";
import { blue } from "@ant-design/colors";
import "./index.css";

const allImages = {
  imgUrl: "https://i.ibb.co/yyb69SQ/Asset-6.png",
};

function Homepage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleTranslation = () => {
    setIsEnglish(!isEnglish);
  };
  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:mdgalib23@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };
  const renderData = (
    <>
      {/* Banner Image */}
      <img
        src={allImages.imgUrl}
        className="w-3/4 mx-auto my-6 object-fill  overflow-hidden"
      />

      {/* Service Section Start */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {isEnglish ? (
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                E-Pension
              </h2>
            ) : (
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ই-পেনশন
              </h2>
            )}
            <FloatButton
              onClick={toggleTranslation}
              description={isEnglish ? "বাংলা" : "English"}
              shape="square"
              icon={<LiaLanguageSolid />}
              style={{ width: "4rem", minHeight: "60px" }}
              // type="red-5"
            />
            {isEnglish ? (
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Planning for Your Dream Retirement
              </h1>
            ) : (
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                আপনার স্বপ্ন অবসর জন্য পরিকল্পনা
              </h1>
            )}
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Pension Service Item Start */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg hover:bg-[#009688] h-full bg-[#1B3950] text-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                    </svg>
                  </div>
                  {isEnglish ? (
                    <h2 className="text-white text-lg title-font font-medium">
                      Apply for pension
                    </h2>
                  ) : (
                    <h2 className="text-white text-lg title-font font-medium">
                      পেনশনের জন্য আবেদন করুন
                    </h2>
                  )}
                </div>
                <div className="flex-grow">
                  {isEnglish ? (
                    <p className="leading-relaxed text-base">
                      Applying for pension is the foundation of your financial
                      security in retirement. Your future self will thank you
                      for applying for pension today.
                    </p>
                  ) : (
                    <p className="leading-relaxed text-base">
                      পেনশনের জন্য আবেদন করা হল অবসরে আপনার আর্থিক নিরাপত্তার
                      ভিত্তি। আজ পেনশনের জন্য আবেদন করার জন্য আপনার ভবিষ্যত
                      স্বয়ং আপনাকে ধন্যবাদ জানাবে।
                    </p>
                  )}
                  <Link
                    href={"/pension-form"}
                    className="mt-3 inline-flex items-center"
                  >
                    {isEnglish ? "Apply Now" : "আবেদন করুন"}

                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* Pension Service Item End */}

            {/* Information Service Item Start */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full hover:bg-[#009688] bg-[#1B3950] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      height="1em"
                      viewBox="0 0 192 512"
                    >
                      <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </div>
                  {isEnglish ? (
                    <h2 className="text-white text-lg title-font font-medium">
                      Govt official pension informtion
                    </h2>
                  ) : (
                    <h2 className="text-white text-lg title-font font-medium">
                      পেনশন তথ্য
                    </h2>
                  )}
                </div>
                <div className="flex-grow text-white">
                  {isEnglish ? (
                    <p className="leading-relaxed text-base">
                      Your retirement dreams start with accurate and up-to-date
                      pension information. From basics to advanced strategies,
                      our pension information covers it all.
                    </p>
                  ) : (
                    <p className="leading-relaxed text-base">
                      আপনার অবসরের স্বপ্ন সঠিক এবং আপ-টু-ডেট পেনশন তথ্য দিয়ে
                      শুরু হয়। বেসিক থেকে শুরু করে উন্নত কৌশল পর্যন্ত, আমাদের
                      পেনশন তথ্য সবই কভার করে।
                    </p>
                  )}
                  <Link
                    href="https://mof.gov.bd/site/notices/abe27e3a-4866-4a0c-9402-a5eb7fe6659f/%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%87%E0%A6%A8%E0%A6%B6%E0%A6%A8-%E0%A6%B8%E0%A6%B9%E0%A6%9C%E0%A7%80%E0%A6%95%E0%A6%B0%E0%A6%A3-%E0%A6%86%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A6"
                    className="mt-3 inline-flex items-center"
                    target="_blank"
                  >
                    {isEnglish ? " Learn More" : "আরও জানুন"}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* Information Service Item End */}

            {/* Contact Service Item Start */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full hover:bg-[#009688] bg-[#1B3950] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </div>
                  {isEnglish ? (
                    <h2 className="text-white text-lg title-font font-medium">
                      Contact Us
                    </h2>
                  ) : (
                    <h2 className="text-white text-lg title-font font-medium">
                      যোগাযোগ করুন
                    </h2>
                  )}
                </div>
                <div className="flex-grow text-white">
                  {isEnglish ? (
                    <p className="leading-relaxed text-base">
                      Got questions? We've got answers. Contact us for
                      assistance. Your satisfaction is our priority. Contact us
                      with your concerns.
                    </p>
                  ) : (
                    <p className="leading-relaxed text-base">
                      প্রশ্ন আছে? আমরা উত্তর পেয়েছি. সাহায্যের জন্য আমাদের সাথে
                      যোগাযোগ করুন. আপনার সন্তুষ্টি আমাদের অগ্রাধিকার। আপনার
                      উদ্বেগ সঙ্গে আমাদের সাথে যোগাযোগ করুন.
                    </p>
                  )}
                  <Link
                    href={"https://mof.portal.gov.bd/site/page/9900251d-ded4-4273-8531-63700c2d3a91/Contact"}
                    className="mt-3 inline-flex items-center"
                    target="_blank" 
                  >
                    {isEnglish ? "Contact Here" : "এখানে যোগাযোগ করুন"}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* Contact Service Item End */}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Officer Profile Start */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-16 mx-auto">
          {isEnglish ? (
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Officer's Quote
            </h1>
          ) : (
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              অফিসারের উদ্ধৃতি
            </h1>
          )}
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  We are thrilled to introduce the ePension System, a
                  transparent and bribe-free platform designed to ensure that
                  your pension is processed smoothly and efficiently. Your trust
                  is invaluable to us, and with this system, we are committed to
                  eradicating any obstacles in your pension approval process.
                  Rest assured, your applications will be handled with the
                  utmost integrity and accountability. Let's build a
                  corruption-free future together.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Head Of Office
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Embrace the future of pension processing with our ePension
                  System. As your Assistant Accountant General, I assure you a
                  fair, prompt, and transparent approval process. This system is
                  designed to eliminate any room for bribery and ensure that
                  your pension reaches you without unnecessary delays. Your
                  financial well-being is our priority, and we are committed to
                  providing you with a system you can trust.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Assistant Accountant General
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Officer Profile End */}

      {/* Contact Section Start */}
      <section className="text-gray-600 bg-white body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.53342217427!2d90.40408067861549!3d23.728350334686752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f741d2caa7%3A0xa7fde41e5add9f92!2sMinistry%20of%20Finance!5e0!3m2!1sen!2sbd!4v1695120699530!5m2!1sen!2sbd%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                {isEnglish ? (
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                ) : (
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ঠিকানা
                  </h2>
                )}
                {isEnglish ? (
                  <p className="mt-1">
                    Ministry of Finance Building - 6, Floor - 3. Bangladesh
                    Secretariat Dhaka-1000. Bangladesh
                  </p>
                ) : (
                  <p className="mt-1">
                    অর্থ মন্ত্রণালয় ভবন- 6, তলা- 3. বাংলাদেশ সচিবালয়
                    ঢাকা-1000। বাংলাদেশ
                  </p>
                )}
              </div>
              {isEnglish ? (
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              ) : (
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ইমেইল
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    ফোন
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              )}
            </div>
          </div>
          {isEnglish ? (
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Send
      </button>
    </div>
          ) : (
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                পাঠান
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
  return renderData;
}

export default Homepage;
