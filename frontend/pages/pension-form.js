import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css"
import { message,Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addPensionForm,
  updatePensionForm,
  createPensionForm,
} from "@/app/feature/pensionData/pensionFormSlice";

export default function PensionForm() {

  const imageHostKey = process.env.NEXT_PUBLIC_Imgbb_Token
  const {Option} = Select
  
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const { _id } = router.query;

  // const pensionFormData = useSelector((state) => state.pensionForm.pensionFormData);

  const formikPensionForm = useFormik({
    initialValues: {
      profileImage: "",
      fullName: "",
      email: user?.email,
      Age: "",
      fathersName: "",
      mothersName: "",
      currentAddress: "",
      permanentAddress: "",
      contactNumber: "",
      postalCode: "",
      nidNumber: "",
      retiredAddress: "",
      joinDate: null,
      retiredDate: null,
      basicSalary: "",
      authorPhoneNo: "",
      bankAccount: "",
      jobPost: "",
      jobId: "",
      jobDepartment: "",
      // agreeTerms: false,
    },

    validationSchema: yup.object({
      fullName: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, "Father's Name must not contain numbers")
        .required("Full Name is required"),
        fathersName: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, "Father's Name must not contain numbers")
        .required("Father's Name is required"),
        mothersName: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, "mother's Name must not contain numbers")
        .required("mother's Name is required"),
        currentAddress: yup
        .string()
        .required("Current Address is required"),
        permanentAddress: yup
        .string()
        .required("Permanent Address is required"),
        profileImage: yup.string().required("Your Image is required"),
        contactNumber: yup.string().required("Contact Number is required"),
      postalCode: yup.string().required("Postal Code is required"),
      nidNumber: yup.string().required("NID Number is required"),
      Age: yup.string().required("Age is required"),
      joinDate: yup.date().required("Join Date is required"),
      retiredDate: yup.date().required("Retired Date is required"),
      basicSalary: yup.string().required("Basic Salary is required"),
      bankAccount: yup.string().required("Bank Account Information is required"),
      jobPost: yup.string().required("Job Post is required"),
      jobId: yup.string().required("Job Id is required"),
      jobDepartment: yup.string().required("Department is required"),
    }),

    onSubmit: async (values, { resetForm }) => {


      // my extra code for img start here

      try {
        // Check if a new profile image is selected
        if (values.profileImage && typeof values.profileImage !== 'string') {
          // Create a new FormData object
          const formData = new FormData();
          formData.append('image', values.profileImage);

          // Upload the image to ImgBB
          const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: 'POST',
            body: formData,
          });

          if (!imgbbResponse.ok) {
            throw new Error('Image upload failed');
          }

          const imgbbData = await imgbbResponse.json();
          // Update the form values with the ImgBB URL
          console.log(imgbbData.data.url,"asjdjdgfsdgf")
          values.profileImage = imgbbData.data.url;
        }
        dispatch(createPensionForm(values))
        .then((res) => {
          // ...
        })
        .catch((err) => {
          // ...
        });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
//       // my extra code for img end here

    
      if (_id) {
      

        // Update existing form
        const pensionFormData = {
          email: user?.email,
          fullName: values.profileImage,
          fullName: values.fullName,
          Age: values.Age,
          fathersName: values.fathersName,
          mothersName: values.mothersName,
          currentAddress: values.currentAddress,
          permanentAddress: values.permanentAddress,
          contactNumber: values.contactNumber,
          postalcode: values.postalCode,
          nidNumber: values.nidNumber,
          joingDateOffice: values.joinDate,
          retiredDate: values.retiredDate,
          basic_slary: values.basicSalary,
          bankAccount: values.bankAccount,
          jobPost: values.jobPost,
          jobId: values.jobId,
          jobDepartment: values.jobDepartment,
        };

        dispatch(updatePensionForm({ formId: _id, pensionFormData }))
          .then((res) => {
            console.log("res", res)
            if (res.payload) {
              message.success("Pension form updated successfully")
                    // Form reset logic start here

              resetForm()
                  // Reset validation errors by reinitializing Formik with a new validation schema
      const newFormik = useFormik({
        initialValues: {
          // ... your initial values ...
        },
        validationSchema: yup.object({
          // ... your validation schema ...
        }),
        onSubmit: (values) => {
          // Your new form submission logic
        },
      });

      // Replace the old formik object with the new one
      formik = newFormik;

      // Form reset logic end here
              // window.location.href = "/dashboard";
            }
            if (res.payload === undefined) {
              message.error("Pension form not updated");
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else {
        // Create a new form
        const newPensionFormData = {
          profileImage: values.profileImage,
          fullName: values.fullName,
          email: user?.email,
          Age: values.Age,
          fathersName: values.fathersName,
          mothersName: values.mothersName,
          currentAddress: values.currentAddress,
          permanentAddress: values.permanentAddress,
          contactNumber: values.contactNumber,
          postalcode: values.postalCode,
          nidNumber: values.nidNumber,
          joingDateOffice: values.joinDate,
          retiredDate: values.retiredDate,
          basic_slary: values.basicSalary,
          bankAccount: values.bankAccount,
          jobPost: values.jobPost,
          jobId: values.jobId,
          jobDepartment: values.jobDepartment,
        };

        // console.log("Creating a new pension form");
        dispatch(createPensionForm(newPensionFormData))
          .then((res) => {
            console.log("res", res);
            if (res.payload) {
              message.success("Pension form created successfully");
                    // Form reset logic start here

              resetForm();
                  // Reset validation errors by reinitializing Formik with a new validation schema
      const newFormik = useFormik({
        initialValues: {
          // ... your initial values ...
        },
        validationSchema: yup.object({
          // ... your validation schema ...
        }),
        onSubmit: (values) => {
          // Your new form submission logic
        },
      });

      // Replace the old formik object with the new one
      formik = newFormik;
            // Form reset logic end here


              // window.location.href = "/dashboard";
            }
            if (res.payload === undefined) {
              message.error("you are not eligible for pension!");
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    },
  });

  useEffect(() => {
    if (router.query) {
      formikPensionForm.setValues((prevValues) => ({
        ...prevValues,
        profileImage: router.query.profileImage || "",
        fullName: router.query.fullName || "",
        email: user?.email,
        Age: router.query.Age || "",
        fathersName: router.query.fathersName || "",
        mothersName: router.query.mothersName || "",
        currentAddress: router.query.currentAddress || "",
        permanentAddress: router.query.permanentAddress || "",
        postalCode: router.query.postalcode || "",
        nidNumber: router.query.nidNumber || "",
        joinDate: router.query.joingDateOffice
          ? new Date(router.query.joingDateOffice)
          : null,
        retiredDate: router.query.retiredDate
          ? new Date(router.query.retiredDate)
          : null,
        basicSalary: router.query.basic_slary || "",
        bankAccount: router.query.bankAccount || "",
        jobPost: router.query.jobPost || "",
        jobId: router.query.jobId || "",
        jobDepartment: router.query.jobDepartment || "",
      }));
    }
  }, [router.query]);
  // Get User_id in LocalStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [_id]);

  const renderData = (
    <div>
      <Head>
        <title>Pension Form</title>
      </Head>
      <div className="bg-white  flex justify-center items-center lg:pt-32 pt-24 pb-6">
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
            <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-500 border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Applying for pension is a commitment to
                  <br /> your well-deserved retirement.
                </h1>
                <form onSubmit={formikPensionForm.handleSubmit}>
                  {/* main flex div start*/}
                  <div className="flex flex-col gap-8"> 
                  {/* personal information start */}
  <h3 className="text-white text-2xl font-bold">Personal Information</h3>
<div className="flex flex-wrap gap-4">
{
  (!_id) && <div className="mb-4">
  <label htmlFor="profileImage" className="block text-white text-sm font-bold mb-2">
    Profile Image*
  </label>
  <input
    type="file"
    accept="image/*"
    name="profileImage"
    id="profileImage"
    onChange={(event) => {
      formikPensionForm.setFieldValue("profileImage", event.currentTarget.files[0]);
    }}
    onBlur={formikPensionForm.handleBlur}
    className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out ${
      formikPensionForm.touched.profileImage && formikPensionForm.errors.profileImage
        ? "border-red-500"
        : ""
    }`}
  />
  {formikPensionForm.touched.profileImage && formikPensionForm.errors.profileImage ? (
    <div className="text-indigo-300 text-sm mt-2">
      {formikPensionForm.errors.profileImage}
    </div>
  ) : null}
</div>
}

<div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.fullName}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.fullName &&
                        formikPensionForm.errors.fullName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.fullName &&
                    formikPensionForm.errors.fullName ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.fullName}
                      </div>
                    ) : null}
                  </div>
<div className="mb-4">
                    <label
                      htmlFor="Age"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Your Age*
                    </label>
                    <input
                      type="number"
                      name="Age"
                      id="Age"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.Age}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.Age &&
                        formikPensionForm.errors.Age
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.Age &&
                    formikPensionForm.errors.Age ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.Age}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="fathersName"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Father's Name*
                    </label>
                    <input
                      type="text"
                      name="fathersName"
                      id="fathersName"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.fathersName}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.fathersName &&
                        formikPensionForm.errors.fathersName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.fathersName &&
                    formikPensionForm.errors.fathersName ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.fathersName}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="mothersName"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Mother's Name*
                    </label>
                    <input
                      type="text"
                      name="mothersName"
                      id="mothersName"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.mothersName}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.mothersName &&
                        formikPensionForm.errors.mothersName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.mothersName &&
                    formikPensionForm.errors.mothersName ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.mothersName}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="currentAddress"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Current Address*
                    </label>
                    <input
                      type="text"
                      name="currentAddress"
                      id="currentAddress"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.currentAddress}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.currentAddress &&
                        formikPensionForm.errors.currentAddress
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.currentAddress &&
                    formikPensionForm.errors.currentAddress ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.currentAddress}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="permanentAddress"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Permanent Address*
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      id="permanentAddress"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.permanentAddress}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.permanentAddress &&
                        formikPensionForm.errors.permanentAddress
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.permanentAddress &&
                    formikPensionForm.errors.permanentAddress ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.permanentAddress}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contactNumber"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Contact Number*
                    </label>
                    <input
                      type="number"
                      name="contactNumber"
                      id="contactNumber"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.contactNumber}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.contactNumber &&
                        formikPensionForm.errors.contactNumber
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.contactNumber &&
                    formikPensionForm.errors.contactNumber ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.contactNumber}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="postalCode"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Postal Code*
                    </label>
                    <input
                      type="number"
                      name="postalCode"
                      id="postalCode"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.postalCode}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.postalCode &&
                        formikPensionForm.errors.postalCode
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.postalCode &&
                    formikPensionForm.errors.postalCode ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.postalCode}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="nidNumber"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      NID Number*
                    </label>
                    <input
                      type="number"
                      name="nidNumber"
                      id="nidNumber"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.nidNumber}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.nidNumber &&
                        formikPensionForm.errors.nidNumber
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.nidNumber &&
                    formikPensionForm.errors.nidNumber ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.nidNumber}
                      </div>
                    ) : null}
                  </div>


</div>
                  {/* personal information end */}
                                    {/* job information start */}
                                    <hr/>
                                    <h3 className="text-white text-2xl font-bold">Job Information</h3>
                                    <div className="flex flex-wrap gap-4">

                                    <div className="mb-4">
                    <label
                      htmlFor="joinDate"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Joined Date*
                    </label>
                    <DatePicker
                      selected={formikPensionForm.values.joinDate}
                      onChange={(date) =>
                        formikPensionForm.setFieldValue("joinDate", date)
                      }
                      onBlur={formikPensionForm.handleBlur}
                      name="joinDate"
                      id="joinDate"
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.joinDate &&
                        formikPensionForm.errors.joinDate
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.joinDate &&
                    formikPensionForm.errors.joinDate ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.joinDate}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="retiredDate"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Retired Date*
                    </label>
                    <DatePicker
                      selected={formikPensionForm.values.retiredDate}
                      onChange={(date) =>
                        formikPensionForm.setFieldValue("retiredDate", date)
                      }
                      onBlur={formikPensionForm.handleBlur}
                      name="retiredDate"
                      id="retiredDate"
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.retiredDate &&
                        formikPensionForm.errors.retiredDate
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.retiredDate &&
                    formikPensionForm.errors.retiredDate ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.retiredDate}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="basicSalary"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Last Basic Salary*
                    </label>
                    <input
                      type="number"
                      name="basicSalary"
                      id="basicSalary"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.basicSalary}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.basicSalary &&
                        formikPensionForm.errors.basicSalary
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.basicSalary &&
                    formikPensionForm.errors.basicSalary ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.basicSalary}
                      </div>
                    ) : null}
                  </div>
 
                  <div className="mb-4">
                    <label
                      htmlFor="bankAccount"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Bank Account*
                    </label>
                    <input
                      type="text"
                      name="bankAccount"
                      id="bankAccount"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.bankAccount}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.bankAccount &&
                        formikPensionForm.errors.bankAccount
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.bankAccount &&
                    formikPensionForm.errors.bankAccount ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.bankAccount}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="jobPost"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Job Post*
                    </label>
                    <input
                      type="text"
                      name="jobPost"
                      id="jobPost"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.jobPost}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.jobPost &&
                        formikPensionForm.errors.jobPost
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.jobPost &&
                    formikPensionForm.errors.jobPost ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.jobPost}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="jobId"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Job Id*
                    </label>
                    <input
                      type="text"
                      name="jobId"
                      id="jobId"
                      onChange={formikPensionForm.handleChange}
                      onBlur={formikPensionForm.handleBlur}
                      value={formikPensionForm.values.jobId}
                      className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        formikPensionForm.touched.jobId &&
                        formikPensionForm.errors.jobId
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formikPensionForm.touched.jobId &&
                    formikPensionForm.errors.jobId ? (
                      <div className="text-indigo-300 text-sm mt-2">
                        {formikPensionForm.errors.jobId}
                      </div>
                    ) : null}
                  </div>
                 
                  <div className="mb-4 w-1/5">
  <label
    htmlFor="department"
    className="block text-white text-sm font-bold mb-2"
  >
    Department*
  </label>
  <Select
    name="jobDepartment"
    id="jobDepartment"
    value={formikPensionForm.values.jobDepartment}
    onChange={(value) => formikPensionForm.setFieldValue("jobDepartment", value)}
    onBlur={formikPensionForm.handleBlur}
    className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
      formikPensionForm.touched.jobDepartment &&
      formikPensionForm.errors.jobDepartment
        ? "border-red-500"
        : ""
    }`}
  >
    <Option value="Bangladesh Army">Bangladesh Army</Option>
    <Option value="Bangladesh Police">Bangladesh Police</Option>
    <Option value="Bangladesh Forest Department">Bangladesh Forest Department</Option>
    <Option value="Bangladesh Railway">Bangladesh Railway</Option>
    <Option value="Local Government Engineering Department">Local Government Engineering Department</Option>
  </Select>
  {formikPensionForm.touched.jobDepartment &&
  formikPensionForm.errors.jobDepartment ? (
    <div className="text-indigo-300 text-sm mt-2">
      {formikPensionForm.errors.jobDepartment}
    </div>
  ) : null}
</div>

                                    </div>
                  {/* job information end */}
                  </div>
                                    {/* main flex div end*/}

                  {/* GB */}
                  

                  

                 
                  {/* <div className="mb-4">
                    <label htmlFor="agreeTerms" className="block text-white text-sm font-bold mb-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        onChange={formikPensionForm.handleChange}
                        onBlur={formikPensionForm.handleBlur}
                        checked={formikPensionForm.values.agreeTerms}
                        className="mr-2"
                      />
                      I agree with the terms and conditions
                    </label>
                    {formikPensionForm.touched.agreeTerms && formikPensionForm.errors.agreeTerms ? (
                      <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.agreeTerms}</div>
                    ) : null}
                  </div> */}

                  <button
                    type="submit"
                   
                    className="w-1/5 block mx-auto my-6 bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition duration-300"
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return renderData;
}
