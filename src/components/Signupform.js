import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 20) {
        errors.firstName = "Must be 20 characters or less";
    }
    // lastname validate
    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
    }
    return errors;
};

const Signupform = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">FirstName</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your firstname"
                    className="p-4 rounded-md border-gray-400"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.firstName}
                    </div>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your lastname"
                    className="p-4 rounded-md border-gray-400"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.lastName}
                    </div>
                ) : null}
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Signupform;
