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

    newE () {
        this.employee.id !== '<New>' && (this.employee = new Employee())
    }

    save () {
        apiSaveEmployee(this.employee)
            .then((e) => {
                console.log(e)
                this.employee.id = e.id

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
        apiFetchEmployees().then(e => (e && (this.employees = e.data)))
    }
}

decorate(EmployeeStore, {
    employees: observable,
    employee: observable,
    next: action,
    prev: action,
    fetchEmployees: action,

})


export default EmployeeStore


