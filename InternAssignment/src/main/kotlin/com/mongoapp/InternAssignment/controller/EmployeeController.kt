package com.mongoapp.InternAssignment.controller

import com.mongoapp.InternAssignment.model.Departments
import com.mongoapp.InternAssignment.model.Employees
import com.mongoapp.InternAssignment.service.EmployeeService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.NoSuchElementException


@RestController
@RequestMapping("/api/employees")
class EmployeeController(private val service: EmployeeService) {

    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(e: NoSuchElementException): ResponseEntity<String> =
        ResponseEntity(e.message,HttpStatus.NOT_FOUND)

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e:IllegalArgumentException):ResponseEntity<String> =
        ResponseEntity(e.message,HttpStatus.BAD_REQUEST)



    @GetMapping("")
    fun getEmployees():Collection<Employees> = service.getEmployees()

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    fun addEmployee(@RequestBody employee:Employees):Employees=service.addEmployee(employee)

//    @GetMapping("/{firstName}")
//    fun findEmployee(@PathVariable firstName:String):Employees=service.findEmployee(firstName)

    @GetMapping("get/{employeeId}")
    fun findEmployeeById(@PathVariable employeeId:Int):Employees?{

        return service.findEmployeeById(employeeId)
    }

    @DeleteMapping("delete/{employeeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteEmployee(@PathVariable employeeId :Int):Employees= service.deleteEmployee(employeeId)

    @GetMapping("/department/{employeeId}")
    fun getEmployeeDepartment(@PathVariable employeeId: Int):Departments?=service.getEmployeeDepartment(employeeId)

    @PatchMapping("patch/{employeeId}")
     fun updateEmployee(@RequestBody employee: Employees,@PathVariable employeeId: Int):Employees=service.updateEmployee(employee,employeeId)


}