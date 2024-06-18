package com.tk.empmgmt_server.service;

import com.tk.empmgmt_server.exception.ResourseNotFoundException;
import com.tk.empmgmt_server.model.Employee;
import com.tk.empmgmt_server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<Employee> getEmployeeById(Long id) throws ResourseNotFoundException {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id: " + id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<Employee> updateEmployee(Long id, Employee employeeDetails) throws ResourseNotFoundException {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id: " + id));
        employee.setFirstName(employeeDetails.getFirstName() != null ? employeeDetails.getFirstName() : employee.getFirstName());
        employee.setLastName(employeeDetails.getLastName() != null ? employeeDetails.getLastName() : employee.getLastName());
        employee.setEmailId(employeeDetails.getEmailId() != null ? employeeDetails.getEmailId() : employee.getEmailId());

        employeeRepository.save(employee);
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<HttpStatus> deleteEmployee(Long id) throws ResourseNotFoundException {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id: " + id));
        employeeRepository.delete(employee);

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }
}
