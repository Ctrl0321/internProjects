package com.mongoapp.InternAssignment.datasource

import com.mongoapp.InternAssignment.model.Departments
import org.springframework.data.mongodb.core.mapping.DBRef

class EmployeeId(
    val employeeId:Int,
    val departmentId:Int
)