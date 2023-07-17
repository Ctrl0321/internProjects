package com.mongoapp.InternAssignment.service
import com.mongoapp.InternAssignment.datasource.EmployeesRepository
import com.mongoapp.InternAssignment.model.Employees
import org.springframework.stereotype.Service
import java.util.*


@Service
class EmployeeService(val repository: EmployeesRepository) {

    fun addEmployee(employee:Employees):Employees= repository.save(employee)
    fun getEmployees(): Collection<Employees> =repository.findAll()
    fun findEmployee(firstName: String): Employees =repository.findByFirstName(firstName)
    fun deleteEmployee(firstName: String): Employees =repository.deleteByFirstName(firstName)


}
