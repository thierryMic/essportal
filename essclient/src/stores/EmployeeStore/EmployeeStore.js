import { decorate, observable, computed, action } from 'mobx'
import Employee from './Employee'
import { apiFetchEmployee, apiSaveEmployee } from '../Api'

class EmployeeStore  {

    constructor(rootStore) {
        this.rootStore = rootStore
        this.index = 0
        this.employees = [new Employee()]
        this.employee = {...this.employees[this.index]}
    }


    getEmployee = (id) => {
        return this.employees.find( e => e.id === id)
    }

    setEmployee = (employee) => {
        this.employee = {...employee}
    }

    newE () {
        this.employee.id !== '<New>' && (this.employee = {...new Employee()})
    }

    save () {
        console.log("saving aspi")
        apiSaveEmployee(this.employee).then((json) => {
            let employee = this.employees.find( e => e.id === json.id)
            if (employee) {
                employee.update(json)
            } else {
                employee = new Employee(json)
                this.employees.push(employee)
            }
            this.setEmployee(employee)
        }).catch()
    }

    next () {
        if (this.index < this.employees.length - 1){
            this.index++
            this.employee = {...this.employees[this.index]}
        }
    }

    prev () {
        if (this.index > 0) {
            this.index--
            this.employee = {...this.employees[this.index]}
        }
    }

    // fetchEmployees () {
    //     apiFetchEmployees()
    //     .then(e => (e.data.length > 0 && (this.employees = e.data.map(json => new Employee(json)))))
    //     .then(() => this.setEmployee(this.employees[0]))
    //     .catch(e => {console.log(e)})
    // }

    fetchEmployee () {
        apiFetchEmployee()
        .then(e => (e.data.length > 0 && (this.employees = e.data.map(json => new Employee(json)))))
        .then(() => {
            this.setEmployee(this.employees[0])
            console.log(this.employees[0])
        })
        .catch(e => {console.log(e)})

    }


}

decorate(EmployeeStore, {
    employees: observable,
    employee: observable,
    save: action,
    next: action,
    prev: action,
    // fetchEmployees: action,
    fetchEmployee: action,
})


export default EmployeeStore


