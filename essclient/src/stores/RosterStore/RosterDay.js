import { decorate, observable, action } from 'mobx'
import RosterItem from './RosterItem'

class RosterDay  {

    constructor(day) {
        this.day = day
        this.items = []
    }

    newItem() {
        this.items.push(new RosterItem(this))
    }

    removeItem(item) {
        console.log(item)
        this.items.splice(this.items.indexOf(item), 1);
    }
}

decorate(RosterDay, {
    day: observable,
    items: observable,
    newItem: action,
    removeItem: action,
})

export default RosterDay