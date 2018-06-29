import { decorate, observable, computed } from 'mobx'

class Employee  {

    constructor() {
        this.id = '<New>'
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
    firstName: observable,
    middleName: observable,
    lastName: observable,
    address: observable,
    email: observable,
    phone: observable,
    bsb: observable,
    accountNo: observable,
    name: computed,
})


export default Employee
