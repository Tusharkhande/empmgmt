import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import add from "../assets/icons/add.png";
import { Link } from "react-router-dom";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
        setEmployees(res.data);
        console.log(res.data)
        }).catch((err) => {
            console.log(err);
        });
  }, []);
  return (
    <div className="flex mt-5 mb-10 min-h-full items-center justify-center h-full bg-slate-300">
  <div className="overflow-x-auto text-center">
  <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Employee Details...</span>
          <Link
            to={"/add-employee"}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <img src={add} alt="Add" className="w-6 h-6" />
          </Link>
        </div>
    <table className="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr className="bg-blue-gray-100 text-gray-700">
          <th className="py-3 px-4 text-left">Employee ID</th>
          <th className="py-3 px-4 text-left">First Name</th>
          <th className="py-3 px-4 text-left">Last Name</th>
          <th className="py-3 px-4 text-left">Email ID</th>
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
        {
            employees.map((employee) => (
                <tr key={employee.id} className="border-b border-blue-gray-200">
                    <td className="py-3 px-4">{employee.id}</td>
                    <td className="py-3 px-4">{employee.firstName}</td>
                    <td className="py-3 px-4">{employee.lastName}</td>
                    <td className="py-3 px-4">{employee.emailId}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  </div>
</div>
  );
};

export default ListEmployees;
