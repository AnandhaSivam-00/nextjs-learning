"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import React from "react";
import { useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import toast from "react-hot-toast";
import { LoadingStateIcon } from "@/public/custom icon/Icon";
import { loginAuthUser } from "@/app/redux/features/authSlice";

export default function LoginPage() {
    const { loading, error, authUserData } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const router = useRouter();

    useEffect(() => {
        if(authUserData?.success) {
            router.push('/');
        }

        if(error) {
            toast.error(error.message);
        }

    }, [authUserData, error]);


    const loginScheme = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password cannot exceed 20 characters')
            .required('Password is required')
    });

    return (
        <>
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="min-w-sm flex flex-col justify-start items-center gap-y-5 p-5 border-2 border-gray-700 rounded-lg">
                <Formik
                    initialValues={{ 
                        email: '',
                        password: ''
                    }}
                    validationSchema={loginScheme}
                    onSubmit={async (values) => {
                        dispatch(loginAuthUser(values))
                    }}
                    className="w-full"
                >
                    {({ errors }) => (
                        <Form className="w-full flex flex-col gap-y-5">
                            <div className="flex flex-col gap-y-5 w-full">
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="email"><p>Email</p></label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`p-2 border rounded-md ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
                                    />
                                    <ErrorMessage name="email" component="p" className="text-red-600 text-xs" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="password"><p>Password</p></label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`p-2 border rounded-md ${errors.password ? 'border-red-600' : 'border-gray-300'}`}
                                    />
                                    <ErrorMessage name="password" component="p" className="text-red-600 text-xs" />
                                    <Link href="/auth/password-reset" className="text-orange-600 hover:underline mt-1 text-xs place-self-end">
                                        <p>Forgot Password?</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className={`w-3/5 flex justify-center mt-2 border-2 border-black uppercase p-3 hover:bg-black hover:text-white  transition-colors duration-300 ${loading ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
                                    disabled={loading}
                                >
                                    {loading ? <LoadingStateIcon width="20" height="20"/> : 'Login'}
                                </button>
                            </div>
                            <p className={`mt-3 text-gray-600 ${loading ? 'hidden' : 'block'}`}>
                                Don't have an account? <Link href="/auth/signup" className="text-orange-600 hover:underline">Register</Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}