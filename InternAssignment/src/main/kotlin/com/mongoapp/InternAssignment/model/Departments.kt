package com.mongoapp.InternAssignment.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("departments")
data class Departments (
    @Id
    val departmentId:Int,
    val departmentName:String
)

/*
{
    "departmentId":500,
    "departmentName":""
}
*/
