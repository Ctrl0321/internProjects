package com.mongoapp.InternAssignment.service

import com.mongoapp.InternAssignment.datasource.DepartmentsRepository
import com.mongoapp.InternAssignment.model.Departments
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import kotlin.jvm.Throws

@Service
class DepartmentService(val repository: DepartmentsRepository) {
    fun getDepartments(): Collection<Departments> =repository.findAll()
    fun addDepartment(department: Departments): Departments =repository.save(department)
    fun deleteDepartment(departmentId: Int): Departments {
        repository.findByDepartmentId(departmentId)?.let {
            return repository.deleteByDepartmentId(departmentId)
        } ?:throw  IllegalArgumentException("Department id with $departmentId doesn't exist")


    }
    fun getDepartment(departmentId: Int): Departments?{

        repository.findByDepartmentId(departmentId)?.let {
           return repository.findByDepartmentId(departmentId)
       }?: throw  IllegalArgumentException("Department id with $departmentId doesn't exist")

    }

}
