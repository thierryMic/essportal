import { decorate, observable, action, computed } from 'mobx'
import Employee from '../Employee';

class RosterItem  {

    constructor(parent) {
        this.id = Date.now()
        this.parent = parent
        this.employee = new Employee()
        this.date = ''
        this.start = ''
        this.finish = ''
    }

    setEmployee(e) {
        this.employee = e
    }

    delete () {
        this.parent.removeItem(this)
    }
}

decorate(RosterItem, {
    employee: observable,
    delete: action,

})



export default RosterItem
