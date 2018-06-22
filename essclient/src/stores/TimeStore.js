import { decorate, observable } from 'mobx'


class TimeStore  {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    // employees = [{id: 'TM001',

    //             },{id: 'JW001',

    //             },
    //         ]

    // employee = this.timesheets[1]

    // addTimeSheet = (timesheet) => {
    //     this.employees.push(timesheet)
    // }

}

decorate(TimeStore, {
    timeSheet: observable,
    timesheets: observable
})


export default TimeStore
