package com.mongoapp.InternAssignment.service
import com.mongoapp.InternAssignment.datasource.DepartmentsRepository
import com.mongoapp.InternAssignment.datasource.EmployeesRepository
import com.mongoapp.InternAssignment.model.Departments
import com.mongoapp.InternAssignment.model.Employees
import org.springframework.stereotype.Service
import java.util.*


@Service
class EmployeeService(val repository: EmployeesRepository,val depRepository:DepartmentsRepository) {

    fun addEmployee(employee:Employees):Employees{
        val exitingDepartment= depRepository.findByDepartmentId(employee.departmentId)
            ?: throw IllegalArgumentException("Department with ID ${employee.departmentId} does not exist.")

        return  repository.save(employee)



    }
    fun getEmployees(): Collection<Employees> {
        val existEmployee=  repository.findAll()
        if (existEmployee.isEmpty()){
            throw NoSuchElementException("No Employees ")
        }
        return existEmployee
    }


    fun findEmployeeById(employeeId: Int): Employees? {
        val existingEmployee= repository.findByEmployeeId(employeeId)
            ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")

        return repository.findByEmployeeId(employeeId)
    }
    fun deleteEmployee(employeeId: Int): Employees {
        val existingEmployee=repository.findByEmployeeId(employeeId)
            ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")
        return repository.deleteByEmployeeId(employeeId)

    }

    fun getEmployeeDepartment(employeeId: Int): Departments? {
        val existingEmployee= repository.findByEmployeeId(employeeId)
            ?: throw IllegalArgumentException("Employee with ID $employeeId does not exist.")

        val employeeDepartment=existingEmployee.departmentId
        return  depRepository.findByDepartmentId(employeeDepartment)

    }

    fun updateEmployee(employee: Employees ,employeeId: Int): Employees {
        val existingEmployee=repository.findByEmployeeId(employeeId)
            ?:throw IllegalArgumentException("employee id with $employeeId doesn't exist")

        repository.deleteByEmployeeId(existingEmployee.employeeId)
        return  addEmployee(employee)
    }


}
