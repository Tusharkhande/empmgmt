import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex mt-5 mb-10 min-h-full w-full items-center justify-center h-full bg-slate-300">
      <div className="overflow-x-auto text-center">
        <h1 className="font-bold text-lg mb-5">Employee Details</h1>
        {employee ? (
          <div className="bg-white shadow-md rounded-xl p-4">
            <table className="min-w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 px-4">Employee ID:</td>
                  <td className="py-2 px-4">{employee.id}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 px-4">First Name:</td>
                  <td className="py-2 px-4">{employee.firstName}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 px-4">Last Name:</td>
                  <td className="py-2 px-4">{employee.lastName}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 px-4">Email ID:</td>
                  <td className="py-2 px-4">{employee.emailId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>No employee data available</p>
        )}
      </div>
    </div>
  );
};

export default ViewEmployee;
