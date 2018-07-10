import { decorate, observable, computed, action } from 'mobx'
import Employee from './Employee'
import { apiFetchEmployees, apiSaveEmployee } from '../Api'

class EmployeeStore  {

    constructor(rootStore) {
        this.rootStore = rootStore
        this.index = 0
        this.employees = [new Employee()]
        this.employee = {...this.employees[this.index]}
    }


    getEmployee = (id) => {
        return this.employees.filter( e => e.id === id )[0]
    }

    getEmployeeIndex = (id) => {
        return this.employees.findIndex( e => e.id === id )
    }

    newE () {
        this.employee.id !== '<New>' && (this.employee = {...new Employee()})
    }

    save () {
        apiSaveEmployee(this.employee).then((json) => {
            let index = this.getEmployeeIndex(json.id)
            index === -1 ? this.employees.push(json) : this.employees.splice(index, 1, json)
            this.employee.id = json.id
        })
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

    fetchEmployees () {
        apiFetchEmployees()
        .then(e => (e && (this.employees = e.data)))
        .then(() => this.employee = {...this.employees[this.index]})
    }
}

decorate(EmployeeStore, {
    employees: observable,
    employee: observable,
    save: action,
    next: action,
    prev: action,
    fetchEmployees: action,

})


export default EmployeeStore


