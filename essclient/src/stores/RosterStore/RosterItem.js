import { decorate, observable, action } from 'mobx'

class RosterItem  {

    constructor(parent) {
        this.parent = parent
        this.employeeId = ''
        this.date = ''
        this.start = ''
        this.finish = ''
    }

    delete () {
        this.parent.removeItem(this)
    }
}

decorate(RosterItem, {
    delete: action,
})



export default RosterItem
