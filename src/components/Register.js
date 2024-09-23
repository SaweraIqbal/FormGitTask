import React, { useState, useEffect } from "react";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, formErrors);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  
    if (!values.username) {
      errors.username = "Username is required!";
    }
  
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
  
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters!";
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match!";
    }
  
    return errors;
  };  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Register Successfully</div>) : (
 <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      ) }
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <p className="text-red-600">{formErrors.username}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <p className="text-red-600">{formErrors.email}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <p className="text-red-600">{formErrors.password}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <p className="text-red-600">{formErrors.confirmPassword}</p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
