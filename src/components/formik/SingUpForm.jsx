import { useFormik } from 'formik';
import React, { useState } from 'react';
import { schema}from './schemas';

const onSubmit = (values, actions) => {
  console.log(values)
  console.log(actions);
  console.log('submited')
}
const SignUpForm = () => {
  const {values, touched, errors,handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      email: '',
      age: '',
      password: '',
      confirmPassword:'',
    },
    validationSchema: schema,
    onSubmit,
  })

  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder="Email"
            required
          />
          {errors?.email &&touched?.email && <span>{errors?.email}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Age"
            required
          />
        </div>
        {errors?.age && touched?.age  && <span>{errors?.age}</span>}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            required
          />
          {errors?.password && touched?.password &&<span>{errors?.password}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm Password"
            required
          />
          {errors?.confirmPassword && touched?.confirmPassword && <span>{errors?.confirmPassword}</span>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

