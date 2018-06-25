import { decorate, observable } from 'mobx'
import Roster from './Roster';

class RosterStore  {


    constructor(rootStore) {
        this.rootStore = rootStore
        this.rosters=[]
        this.roster = new Roster(this)
    }


    createRoster() {
        var roster = new Roster(this)
        this.rosters.push(roster)
        this.roster = roster
    }

 }


decorate(RosterStore, {
    roster: observable,
})

export default RosterStore
