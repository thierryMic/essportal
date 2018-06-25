import { decorate, observable, action } from 'mobx'
import RosterDay from './RosterDay'
import moment from 'moment'

class Roster  {

    days = []
    constructor(store) {
        this.store = store
        this.startDate = '2018-03-04'

        for (let i = 1; i < 8; i++) {
            this.days.push(new RosterDay(moment(this.startDate).add(i,'d')))
        }
    }

    changeStartDate(newStart) {
        this.startDate = newStart
        for (let i = 0; i < 7; i++) {
            this.days[i].day = (moment(this.startDate).add(i,'d'))
        }
    }
}


decorate(Roster, {
    startDate: observable,
    days: observable,
    changeStartDate: action,
})

export default Roster