
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";
import "react-datepicker/dist/react-datepicker.css";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postReport } from "@/app/feature/pensionData/pensionFormSlice";
import Link from "next/link";


export default function PensionForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [user, setUser] = useState();
    // console.log("user: ", user.name);

    // const pensionFormData = useSelector((state) => state.pensionForm.pensionFormData);

    const formikPensionForm = useFormik({
        initialValues: {
            fullName: user?.name || "",
            complain_title: "",
            complain_des: "",
        },

        validationSchema: yup.object({
            complain_title: yup.string().required("complain_title is required"),
            complain_des: yup.string().required("complain_des is required"),
        }),

        onSubmit: (values) => {

            const { fullName, complain_title, complain_des } = values;

            const data = {
                fullName: fullName,
                complain_title,
                complain_des,
            };

            if (!user) {
                message.error("Please login first");
                return;
            }
            dispatch(postReport(data));
            message.success("Complain Submitted Successfully");
            router.push("/dashboard");
        },

    });



    // Get User_id in LocalStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    }, []);


    // useSelector((state) => console.log(state));


    const renderData = (
        <div>
            <Head>
                <title>Pension Form</title>
            </Head>
            <div className='bg-white  flex justify-center items-center lg:pt-32 pt-16 pb-6'>
                <section className="">
                    <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
                        <Link href={'/myreports'} className="text-blue-600 text-center lg:pt-16 pb-16 hidden">
                            <span className="text-[20px] font-serif border p-2">
                                Check Previous Complain
                            </span>
                        </Link>
                        <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-500 border-gray-700">
                            <div className="p-10 space-y-4 md:space-y-6">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                                    Share you Complain to Head Officer
                                </h1>
                                <form onSubmit={formikPensionForm.handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="complain_title" className="block text-white text-sm font-bold mb-2">
                                            Complain Title*
                                        </label>
                                        <input
                                            type="text"
                                            name="complain_title"
                                            id="complain_title"
                                            onChange={formikPensionForm.handleChange}
                                            onBlur={formikPensionForm.handleBlur}
                                            value={formikPensionForm.values.complain_title}
                                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${formikPensionForm.touched.fullName && formikPensionForm.errors.fullName ? "border-red-500" : ""}`}
                                        />
                                        {formikPensionForm.touched.complain_title && formikPensionForm.errors.complain_title ? (
                                            <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.complain_title}</div>
                                        ) : null}
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="complain_des" className="block text-white text-sm font-bold mb-2">
                                            Complain description*
                                        </label>
                                        <textarea
                                            type="text"
                                            name="complain_des"
                                            id="complain_des"
                                            onChange={formikPensionForm.handleChange}
                                            onBlur={formikPensionForm.handleBlur}
                                            value={formikPensionForm.values.complain_des}
                                            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${formikPensionForm.touched.mothersName && formikPensionForm.errors.mothersName ? "border-red-500" : ""}`}
                                        />
                                        {formikPensionForm.touched.complain_des && formikPensionForm.errors.complain_des ? (
                                            <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.complain_des}</div>
                                        ) : null}
                                    </div>



                                    <button
                                        type="submit"
                                        className="w-full bg-green-700 hover:bg-green-900 text-white font-medium py-2 px-4 rounded transition duration-300"
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


