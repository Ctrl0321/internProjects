package com.mongoapp.InternAssignment.service
import com.mongoapp.InternAssignment.datasource.DepartmentsRepository
import com.mongoapp.InternAssignment.datasource.EmployeesRepository
import com.mongoapp.InternAssignment.model.Departments
import com.mongoapp.InternAssignment.model.Employees
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Service
import java.util.*


@Service
class EmployeeService(val employeeRepository: EmployeesRepository, val depRepository:DepartmentsRepository) {

    fun addEmployee(employee:Employees):Employees{
         depRepository.findByDepartmentId(employee.departmentId)?.let {
             return  employeeRepository.save(employee)
         }
            ?: throw IllegalArgumentException("Department with ID ${employee.departmentId} does not exist.")

    }
    fun getEmployees(): Collection<Employees> {
        val existEmployee=  employeeRepository.findAll()
        if (existEmployee.isEmpty()){
            throw NoSuchElementException("No Employees ")
        }
        return existEmployee
    }


    fun findEmployeeById(employeeId: Int): Employees? {
         employeeRepository.findByEmployeeId(employeeId)?.let {
             return employeeRepository.findByEmployeeId(employeeId)
         }
            ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")
    }
    fun deleteEmployee(employeeId: Int): Employees {
       employeeRepository.findByEmployeeId(employeeId)?.let {
           return employeeRepository.deleteByEmployeeId(employeeId)
       } ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")


    }

    fun getEmployeeDepartment(employeeId: Int): Departments? {
        val existingEmployee= employeeRepository.findByEmployeeId(employeeId)
            ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")

        val employeeDepartment=existingEmployee.departmentId
        return  depRepository.findByDepartmentId(employeeDepartment)

    }

    fun updateEmployee(employee: Employees ,employeeId: Int): Employees {
        val existingEmployee=employeeRepository.findByEmployeeId(employeeId)
            ?:throw IllegalArgumentException("employee id with $employeeId doesn't exist")

        employeeRepository.deleteByEmployeeId(existingEmployee.employeeId)
        return  addEmployee(employee)
    }

    fun getEmployeeWithFirstLetter(firstLetter: String): List<Employees> {
      return employeeRepository.findByFirstNameStartingWithIgnoreCase(firstLetter)
    }


}










//val regexPattern = "^$firstLetter"
//val query = Query.query(Criteria.where("firstName").regex(regexPattern, "i"))
//return employeeRepository.findByFirstNameRegexIgnoreCase(regexPattern)