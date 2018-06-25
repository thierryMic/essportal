import { decorate, observable, action } from 'mobx'
import RosterItem from './RosterItem'

class RosterDay  {

    constructor(day) {
        this.day = day
        this.items = []
    }

    newItem() {
        // debugger
        console.log('add')
        this.items.push(new RosterItem())
    }
}

decorate(RosterDay, {
    day: observable,
    items: observable,
    newItem: action,
})

export default RosterDay