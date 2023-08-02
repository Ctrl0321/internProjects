package com.mongoapp.InternAssignment.datasource

import com.mongoapp.InternAssignment.model.Employees
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployeesRepository : MongoRepository<Employees,Int> {
//    fun deleteByEmployeeId(employeeId: Int): Employees
//    fun findByEmployeeId(employeeId: Int): Employees?
//    fun findByFirstNameRegexIgnoreCase(regexPattern: String): List<Employees>
    fun findByFirstNameStartingWithIgnoreCase(firstLetter: String): List<Employees>
    fun findByFirstName(firstName: String): Employees?


}