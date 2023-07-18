package com.mongoapp.InternAssignment.datasource

import com.mongoapp.InternAssignment.model.Employees
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployeesRepository : MongoRepository<Employees,String> {
    fun deleteByEmployeeId(employeeId: Int): Employees
    fun findByEmployeeId(employeeId: Int): Employees


}