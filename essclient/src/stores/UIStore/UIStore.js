import { decorate, action, observable} from 'mobx'

class UIStore {

    constructor(rootStore) {
        this.activeViewId = null
        this.rootStore = rootStore
    }


    setView (link, nav=false) {
        if (nav || link !== window.location.pathname) {
            this.activeViewId = link
            nav !==true && window.history.pushState(null, null, link)
        }
    }

    showEmployee() {
        this.setView ('/employee')
        this.rootStore.employeeStore.fetchEmployees()
    }

    showRoster() {
        this.setView ('/roster')
    }
}


decorate (UIStore, {
    activeViewId: observable,
    showEmployee: action,
    showRoster: action,
})

export default UIStore
