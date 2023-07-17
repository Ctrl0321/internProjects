package com.mongoapp.InternAssignment.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "employees")

data class Employees(
    @Id
    val id: String,
    val firstName: String,
    val surName: String,
    val position: String?
)