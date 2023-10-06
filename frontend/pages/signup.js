import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { registerUser } from '@/app/feature/auth/authSlice';
import { message } from 'antd';

export default function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();

  // const userData = useSelector((state) => state.userReducer);
  const formikSignUP = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have at least 2 characters")
        .required(),
       
      email: yup.string().email().required("Email is required")
      .test('no-special-chars', 'Email cannot contain special characters except @', (value) => {
        // Check if the email contains any of the specified special characters
        return /^[a-zA-Z0-9_@.]+$/.test(value);
      }),
      password: yup
        .string()
        .min(6, "Password at least 6 characters")
        .required(),
    }),

    onSubmit: (values, { resetForm }) => {
      const person = { ...values };
      // localStorage.setItem("user", JSON.stringify(person.userId));

      dispatch(registerUser(person))
        .then((response) => {
          console.log('response', response);
          if (response?.payload?.success) {
            message.success('Signup successful');
            router.push('/signin');
          } else {
            // Handle the case where the user is already registered
            message.error('User already registered');
          }
        })
        .catch((error) => {
          console.error('Error updating application status:', error?.message);
          message.error(error?.message);
        });


      resetForm({ values: { name: "", email: "", password: "", } });
    },
  });




  const srenderNameError = formikSignUP.touched.name &&
    formikSignUP.errors.name && (
      <span className="text-indigo-300">{formikSignUP.errors.name}</span>
    );
  const srenderEmailError = formikSignUP.touched.email &&
    formikSignUP.errors.email && (
      <span className="text-indigo-300">{formikSignUP.errors.email}</span>
    );
  const srenderPasswordError =
    (formikSignUP.touched.password && formikSignUP.errors.password) ? (
      <span className="text-indigo-300">
        {formikSignUP.errors.password}
      </span>
    ) : null;


  const renderData = (
    (
      <>
        <Head>
          <title>Sign Up</title>
        </Head>
        <div className='bg-white flex justify-evenly items-center lg:pt-32 py-24'>
        <section className=''>
<img src='https://i.ibb.co/rG4JhRR/Asset-1.png'></img>

        </section>
          <section className=" ">
            <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
              <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-600 border-gray-700">
                <div className="p-10 space-y-4 md:space-y-6">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                    Create a new account
                  </h1>
                  <form className="space-y-2 md:space-y-4 " onSubmit={formikSignUP.handleSubmit}>
                    <div className=''>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={formikSignUP.handleChange}
                        value={formikSignUP.values.name}
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your Full Name"
                      />
                    </div>
                    {srenderNameError}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"

                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formikSignUP.handleChange}
                        value={formikSignUP.values.email}
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your Email"

                      />
                    </div>
                    {srenderEmailError}
                    <div className='flex gap-2'>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={formikSignUP.handleChange}
                          value={formikSignUP.values.password}
                          placeholder="Password"
                          className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    {srenderPasswordError}
                    <button
                      type="submit"
                      className="w-full text-white bg-gray-700 hover:bg-gray-800    font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign Up
                    </button>
                    <p className="text-sm font-light text-white ">
                      Already have an account yet?{" "}
                      <Link
                        href={"/signin"}
                        className="font-medium text-gray-300"
                      >
                        Sign In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  )
  return renderData;
}
