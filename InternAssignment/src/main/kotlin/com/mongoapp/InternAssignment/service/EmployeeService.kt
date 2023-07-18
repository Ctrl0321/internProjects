package com.mongoapp.InternAssignment.service
import com.mongoapp.InternAssignment.datasource.EmployeeId
import com.mongoapp.InternAssignment.datasource.EmployeesRepository
import com.mongoapp.InternAssignment.model.Employees
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException
import java.util.*


@Service
class EmployeeService(val repository: EmployeesRepository) {

    fun addEmployee(employee:Employees):Employees{
        
        return  repository.save(employee)
    }
    fun getEmployees(): Collection<Employees> {
        val existEmployee=  repository.findAll()
        if (existEmployee.isEmpty()){
            throw NoSuchElementException("No Employees ")
        }
        return existEmployee
    }


    fun findEmployeeById(employeeId: Int): Employees =repository.findByEmployeeId(employeeId)
    fun deleteEmployee(employeeId: Int): Employees =repository.deleteByEmployeeId(employeeId)







}
