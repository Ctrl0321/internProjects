package com.mongoapp.InternAssignment.datasource

import com.mongoapp.InternAssignment.model.Departments
import org.springframework.data.mongodb.repository.MongoRepository

interface DepartmentsRepository:MongoRepository<Departments,Int> {
     fun deleteByDepartmentId(departmentId: Int): Departments
     fun findByDepartmentId(departmentId: Int): Departments?

}