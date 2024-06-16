package com.tk.empmgmt_server.service;

import com.tk.empmgmt_server.model.Employee;
import com.tk.empmgmt_server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public void addEmployee(Employee employee){
        employeeRepository.save(employee);
    }
}
