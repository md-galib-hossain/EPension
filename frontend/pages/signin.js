import Head from 'next/head';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from "formik";
import * as yup from "yup";
import { message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loginUser } from '@/app/feature/auth/authSlice';


export default function signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required'),
    }),

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;

      if (!email || !password) {
        message.error('Please enter a valid email');
      }

      dispatch(loginUser({ email, password }))
        .then((response) => {
          console.log('response: ', response);
          if (response?.payload?.token) {
            message.success('Login successful');
            router.push('/dashboard');
            window.location.reload();
          }
          response?.payload?.message && message.error(response?.payload?.message);
        })

      // Check if the user exists
      resetForm({ values: { email: '', password: '' } });
      // window.location.reload();
    },
  });


  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/dashboard');
    }
  }, []);






  const renderData = (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className='bg-white h-screen flex justify-evenly items-center lg:pt-32'>
        <section className=''>
<img src='https://i.ibb.co/rG4JhRR/Asset-1.png'></img>

        </section>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
            <div className="w-full rounded shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-500 border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Sign in to your account
                </h1>
                <form className="space-y-2 md:space-y-4" onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder=""
                    />
                  </div>
                  {/* {srenderEmailError} */}
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
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="••••••••"
                      className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  {/* {srenderPasswordError} */}
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-white"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-white hover:underline "
                    >
                      Forgot password?
                    </a>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-700 hover:bg-gray-800  font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-white ">
                    Don’t have an account yet?{" "}
                    <Link
                      href={"/signup"}
                      className="font-medium text-gray-300"
                    >
                      Sign up
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
  return renderData;
}
