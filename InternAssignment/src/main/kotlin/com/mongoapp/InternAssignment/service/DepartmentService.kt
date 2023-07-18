package com.mongoapp.InternAssignment.service

import com.mongoapp.InternAssignment.datasource.DepartmentsRepository
import com.mongoapp.InternAssignment.model.Departments
import org.springframework.stereotype.Repository

@Repository
class DepartmentService(val repository: DepartmentsRepository) {
    fun getDepartments(): Collection<Departments> =repository.findAll()
    fun addDepartment(department: Departments): Departments =repository.save(department)
    fun deleteDepartment(departmentId: Int): Departments =repository.deleteByDepartmentId(departmentId)
    fun getDepartment(departmentId: Int): Departments =repository.findByDepartmentId(departmentId)

}
