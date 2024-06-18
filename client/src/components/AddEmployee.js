import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = { firstName, lastName, emailId };

    if (id) {
      EmployeeService.updateEmployee(id, newEmployee)
        .then((res) => {
          navigate("/employees");
        })
        .catch((err) => {
          console.log("Error updating employee:", err);
        });
    } else {
      EmployeeService.addEmployee(newEmployee)
        .then((res) => {
          setFirstName("");
          setLastName("");
          setEmailId("");
          navigate("/employees");
        })
        .catch((err) => {
          console.log("Error adding employee:", err);
        });
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          const employee = res.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmailId(employee.emailId);
        })
        .catch((err) => {
          console.log("Error fetching employee:", err);
        });
    }
  }, []);

  const title = id ? "Edit Employee" : "Add Employee";

  return (
    <div className="flex mt-5 mb-10 min-h-full items-center justify-center h-full bg-slate-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="emailId" className="block text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <Link
              to={"/employees"}
              className="w-1/2 ml-4 text-center bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
