import UIStore from './UIStore/UIStore'
import EmployeeStore from './EmployeeStore/EmployeeStore'
import TimeStore from './TimeStore'
import RosterStore from './RosterStore/RosterStore'

class RootStore {
    constructor() {
        this.employeeStore = new EmployeeStore(this)
        this.timeStore = new TimeStore(this)
        this.rosterStore = new RosterStore(this)
        this.uiStore = new UIStore(this)
    }
}

export default RootStore
