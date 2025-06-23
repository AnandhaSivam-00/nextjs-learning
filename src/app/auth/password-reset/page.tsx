"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function PasswordResetPage() {
    const emailVaildateSchema = Yup.object().shape({
        email: Yup.string().required('Email is required')
    })

    return (
        <>
            <Link href="/auth/login" className="hover:text-gray-500 mb-5 text-base">
                <p>&lt; Back</p>
            </Link>
            <h1 className="text-5xl font-bold">Password Reset</h1>
            <div className="min-w-sm flex flex-col justify-start items-center gap-y-5 p-5 border-2 border-gray-700 rounded-lg">
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={emailVaildateSchema}
                    className="w-full"
                    onSubmit={async (value) => {
                        console.log(value);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="w-full flex flex-col gap-y-5">
                            <div className="flex flex-col gap-y-5 w-full">
                                <div className="flex flex-col gap-y-1">
                                    <label htmlFor="email"><p>Email</p></label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`p-2 border rounded-md ${
                                            errors.email && touched.email ? 'border-red-600' : (
                                                !errors.email && touched.email ? 'border-green-600' : 'border-gray-300'
                                            )}`}
                                        placeholder="Enter your email here"
                                    />
                                    <ErrorMessage name="email" component="p" className="text-red-600 text-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-3/5 mt-2 border-2 border-black uppercase p-3 hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}