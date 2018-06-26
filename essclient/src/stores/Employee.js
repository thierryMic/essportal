import { decorate, observable, action, computed } from 'mobx'

class Employee  {

    constructor() {
        this.id = 'TM001'
        this.firstName = ''
        this.middleName = ''
        this.lastName = ''
        this.address = ''
        this.email = ''
        this.phone = ''
        this.bsb = ''
        this.accountNo = ''
    }

    get name() {
        return this.firstName + this.lastName
    }

}

decorate(Employee, {
    name: computed
})



export default Employee
