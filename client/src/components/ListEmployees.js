import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import add from "../assets/icons/add.png";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt, FaUser, FaUserEdit, FaUserPlus } from "react-icons/fa";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex mt-5 mb-10 min-h-full w-full items-center justify-center h-full bg-slate-300">
      <div className="overflow-x-auto text-center">
        <div className="flex justify-end mb-4">
          {/* <span className="font-bold text-lg">Employee Details...</span> */}
          <Link
            to={"/add-employee"}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {/* <img src={add} alt="Add" className="w-6 h-6" /> */}
            <FaUserPlus/>
          </Link>
        </div>
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-center">Employee ID</th>
              <th className="py-3 px-4 text-center">First Name</th>
              <th className="py-3 px-4 text-center">Last Name</th>
              <th className="py-3 px-4 text-center">Email ID</th>
              <th className="py-3 px-4 text-center" colSpan={"3"}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-blue-gray-200">
                <td className="py-3 px-4">{employee.id}</td>
                <td className="py-3 px-4">{employee.firstName}</td>
                <td className="py-3 px-4">{employee.lastName}</td>
                <td className="py-3 px-4">{employee.emailId}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/view-employee/${employee.id}`}
                    className="text-blue-600 hover:underline"
                    
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/edit-employee/${employee.id}`}
                    state={{employee}}
                    className="text-blue-600 hover:underline"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <Link
                    onClick={() => deleteEmployee(employee.id)}
                    className="text-red-600 hover:underline"
                  >
                    <FaTrashAlt />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployees;
