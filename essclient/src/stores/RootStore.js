import EmployeeStore from './EmployeeStore'
import TimeStore from './TimeStore'

class RootStore {
    constructor() {
        this.employeeStore = new EmployeeStore(this)
        this.timeStore = new TimeStore(this)
    }
}

export default RootStore