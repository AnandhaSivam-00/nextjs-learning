"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { createNewUser } from "@/app/redux/features/userSlice";

import { LoadingStateIcon } from "@/public/custom icon/Icon";


export default function SignupPage() {

    const { loading, error, userData } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        if(userData?.success) {
            router.push('/auth/login');
        }

        if(error) {
            toast.error(error.message);
        }
    }, [userData, error, router]);

    const signupScheme = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .matches(
                /^[a-zA-Z0-9]+$/,
                'Cannot contain special characters or spaces'
            ),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password cannot exceed 20 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                'Not a proper password'
            )
            .required('Password is required'),
        confirm_password: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Oops! Passwords do not match')
    });

    return (
        <>
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="min-w-sm flex flex-col justify-start items-center gap-y-5 p-5 border-2 border-gray-700 rounded-lg">
                <Formik
                    initialValues={{ 
                        name: '',
                        email: '',
                        password: '',
                        confirm_password: ''
                    }}
                    validationSchema={signupScheme}
                    onSubmit={async (values) => {
                        console.log(values);
                        dispatch(createNewUser({
                            username: values.name,
                            email: values.email,
                            password: values.password
                        }));
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="w-full flex flex-col gap-y-5">
                            <div className="flex flex-col gap-y-5 w-full">
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="name"><p className="after:content-['*'] after:text-red-500">Name</p></label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`p-2 border rounded-md ${errors.name && touched.name ? 'border-red-600' : 'border-gray-300'}`}
                                    />
                                    <ErrorMessage name="name" component="p" className="text-red-600 text-xs" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="email"><p className="after:content-['*'] after:text-red-500">Email</p></label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`p-2 border rounded-md ${errors.email && touched.email ? 'border-red-600' : 'border-gray-300'}`}
                                    />
                                    <ErrorMessage name="email" component="p" className="text-red-600 text-xs" />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="password"><p className="after:content-['*'] after:text-red-500">Password</p></label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`p-2 border rounded-md ${
                                            errors.password && touched.password ? 'border-red-600' : (
                                                !errors.password && touched.password ? 'border-green-600' : 'border-gray-300'
                                            )}`}
                                    />
                                    <ErrorMessage name="password" component="p" className="text-red-600 text-xs" />
                                    <div className="text-xs text-gray-400">
                                        <ul className="list-disc pl-5">
                                            <li>Atleast contains one uppercase letter</li>
                                            <li>Atleast contains one lowercase letter</li>
                                            <li>Atleast contains one spacial character</li>
                                            <li>Atleast contains one number</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="confirm_password"><p className="after:content-['*'] after:text-red-500">Confirm Password</p></label>
                                    <Field
                                        type="password"
                                        id="confirm_password"
                                        name="confirm_password"
                                        className={`p-2 border rounded-md ${
                                            errors.confirm_password && touched.confirm_password ? 'border-red-600' : (
                                                !errors.confirm_password && touched.confirm_password ? 'border-green-600' : 'border-gray-300'
                                            )}`}
                                    />
                                    <ErrorMessage name="confirm_password" component="p" className="text-red-600 text-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className={`w-3/5 mt-2 border-2 border-black uppercase p-3 hover:bg-black hover:text-white transition-colors duration-300 flex justify-center items-center ${loading ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
                                    disabled={loading}
                                >
                                    {loading ? <LoadingStateIcon width="20" height="20" /> : 'Sign Up'}
                                </button>
                            </div>
                            <p className={`mt-3 text-gray-600 ${loading ? 'hidden': 'block'}`}>
                                Already have an account? <Link href="/auth/login" className="text-orange-600 hover:underline">Login</Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}