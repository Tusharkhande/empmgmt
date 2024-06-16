import React, { useState } from "react";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  return (
    <div class="flex mt-5 min-h-full items-center justify-center">
  <div class="overflow-x-auto">
    <span className="font-bold text-lg">Employee Details</span>
    <table class="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr class="bg-blue-gray-100 text-gray-700">
          <th class="py-3 px-4 text-left">Employee ID</th>
          <th class="py-3 px-4 text-left">First Name</th>
          <th class="py-3 px-4 text-left">Last Name</th>
          <th class="py-3 px-4 text-left">Email ID</th>
        </tr>
      </thead>
      <tbody class="text-blue-gray-900">
        {
            employees.map((employee) => (
                <tr key={employee.id} class="border-b border-blue-gray-200">
                    <td class="py-3 px-4">{employee.id}</td>
                    <td class="py-3 px-4">{employee.firstName}</td>
                    <td class="py-3 px-4">{employee.lastName}</td>
                    <td class="py-3 px-4">{employee.email}</td>
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
