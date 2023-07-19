package com.mongoapp.InternAssignment.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "employees")

data class Employees(
    @Id
    val employeeId:Int,
    val firstName: String,
    val surName: String,
    val position: String,
    val departmentId:Int

)
/*
{   "employeeId":,
    "firstName":"",
    "surName":"",
    "position":"",
    "department:
}

*/
