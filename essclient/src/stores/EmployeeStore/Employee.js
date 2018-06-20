import { decorate, observable, computed } from 'mobx'

class Employee  {

    constructor() {
        this.empId = ''
        this.empName = ''
        this.empAddress = ''
        this.empEmail = ''
        this.empPhone = ''
        this.bsb = ''
        this.accountNo = ''
       }
    }

decorate(Lease, {
    empId: observable,
    empName: observable,
    empAddress: observable,
    empEmail: observable,
    empPhone: observable,
    bsb: observable,
    accountNo: observable,
})

export default Employee
