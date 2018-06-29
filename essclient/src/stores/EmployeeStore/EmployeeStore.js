import { decorate, observable, computed, action } from 'mobx'
import Employee from './Employee'

class EmployeeStore  {

    constructor(rootStore) {
        this.rootStore = rootStore
        this.activeRecordIndex = 0
        this.employees = [{id: 'TM001',
                            firstName: 'Thierry',
                            middleName: 'Arnaud',
                            lastName: 'Michel',
                            address: '76 Elmswood boulevard, Keysborough',
                            email: 'thierryamichel@gmail.com',
                            phone: '0417 897 591',
                            bsb: '1232-456',
                            accountNo: '89101112',
                        },{id: 'JW001',
                            firstName: 'John',
                            middleName: 'Patrick',
                            lastName: 'Wood',
                            address: '12 buggs bunny road, Acme',
                            email: 'johnwood@gmail.com',
                            phone: '0417 127 111',
                            bsb: '123-456',
                            accountNo: '131415',
                        },{id: 'JM001',
                        firstName: 'Julie',
                        middleName: 'Mac',
                        lastName: 'McCarron',
                        address: '12 micker road, Acme',
                        email: 'jould@gmail.com',
                        phone: '0417 127 111',
                        bsb: '888-886',
                        accountNo: '133245',
                    },]
            // requires checking for empty array
            this.employee = {...this.employees[this.activeRecordIndex]}
    }


    getEmployee = (id) => {
        return this.employees.filter( e => e.id === id )[0]
    }

    newE () {
        this.employee.id !== '<New>' && (this.employee = new Employee())
    }

    save () {
        if (this.employee.id === '<New>') {
            this.employee.id = Date.now()
            this.employees.push(this.employee)
        } else {
            Object.assign(this.employees[this.activeRecordIndex], this.employee)
        }
    }

    next () {
        this.activeRecordIndex < this.employees.length - 1 && this.activeRecordIndex++
        this.employee = {...this.employees[this.activeRecordIndex]}
    }

    prev () {
        this.activeRecordIndex > 0 && this.activeRecordIndex--
        this.employee = {...this.employees[this.activeRecordIndex]}
    }
}

decorate(EmployeeStore, {
    employees: observable,
    employee: observable,
    next: action,
    prev: action,

})


export default EmployeeStore


