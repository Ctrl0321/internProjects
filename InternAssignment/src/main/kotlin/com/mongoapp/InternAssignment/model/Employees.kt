package com.mongoapp.InternAssignment.model

import com.mongoapp.InternAssignment.datasource.EmployeeId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "employees")

data class Employees(
    @Id
    val employeeId:Int,
    val firstName: String,
    val surName: String,
    val position: String,

)
/*
{   "employeeId":"",
    "firstName":"",
    "surName":"",
    "position":"",
}

*/
