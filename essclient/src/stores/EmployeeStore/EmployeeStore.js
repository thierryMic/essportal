import { decorate, observable } from 'mobx'


class EmployeeStore  {

    employees = [{id: 'TM001',
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
                },
            ]

    employee = this.employees[1]

    addEmployee = (emp) => {
        this.employees.push(emp)
    }

}

decorate(EmployeeStore, {
    employee: observable,
    employees: observable
})

var employeeStore = new EmployeeStore()

export default employeeStore
