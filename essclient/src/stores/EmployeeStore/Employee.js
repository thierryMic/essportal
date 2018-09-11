import { decorate, observable, computed } from 'mobx'

class Employee  {

    constructor(json={}) {
        this.id = json.id || '<New>'
        this.firstName = json.firstName || ''
        this.middleName = json.middleName || ''
        this.lastName = json.lastName || ''
        this.dob = json.dob || ''
        this.address = json.address || ''
        this.email = json.email || ''
        this.phone = json.phone || ''
        this.kinName = json.kinName || ''
        this.kinRelation = json.kinRelation || ''
        this.kinPhone = json.kinPhone || ''
        this.superFund=json.superFund || ''
        this.superAbn = json.superAbn || ''
        this.superNo = json.superNo || ''
        this.bsb = json.bsb || ''
        this.accountNo = json.accountNo || ''
        console.log(this)
    }

    get name() {
        return this.firstName + this.lastName
    }

    update (json) {
        Object.keys(this).forEach ( k => this[k] = json[k])
    }

    isValid () {
        let errors = []
        let warnings = []

        this.firstName.length === 0 && errors.push('First name cannot be empty')
        this.lastName.length === 0 && errors.push('Last name cannot be empty')
        this.dob.length === 0 && errors.push('You must provide your date of birth')
        this.address.length === 0 && errors.push('You must provide your date of address')
        this.email.length === 0 && errors.push('You must provide a valid email address')
        this.phone.length === 0 && errors.push('You must provide a valid phone number')

        this.superFund.length === 0 && warnings.push('Your superannuation payments made to Australian Super if you do not nominate a superannuation fund')
        this.superAbn.length === 0 && warnings.push('Your superannuation payments made to Australian Super if you do not nominate a superannuation fund')
        this.superNo.length === 0 && warnings.push('Your superannuation payments made to Australian Super if you do not nominate a superannuation fund')

        this.bsb.length === 0  && errors.push ('Invalid bsb')
        this.accountNo.length === 0  && errors.push ('Invalid bsb')

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
