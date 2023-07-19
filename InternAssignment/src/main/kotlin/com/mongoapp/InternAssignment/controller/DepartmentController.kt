package com.mongoapp.InternAssignment.controller

import com.mongoapp.InternAssignment.model.Departments
import com.mongoapp.InternAssignment.service.DepartmentService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/departments")
class DepartmentController(private val service: DepartmentService) {
    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e:IllegalArgumentException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.BAD_REQUEST)


    @GetMapping("")
    fun getDepartments():Collection<Departments> = service.getDepartments()

    @GetMapping("/{departmentId}")
    fun getDepartment(@PathVariable departmentId: Int):Departments?=service.getDepartment(departmentId)

    @PostMapping("")
    fun addDepartment(@RequestBody department: Departments):Departments=service.addDepartment(department)

    @DeleteMapping("/{departmentId}")
    fun deleteDepartment(@PathVariable departmentId:Int):Departments=service.deleteDepartment(departmentId)



}