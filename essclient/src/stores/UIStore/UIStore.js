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
        this.rootStore.employeeStore.fetchEmployee(localStorage.getItem("loggeduser"))
    }

    showRoster() {
        this.setView ('/roster')
    }

    showSignedIn() {
        this.setView ('/auth/signed-in')
    }

    showSignOut() {
        this.setView ('/auth/signout')
    }
}


decorate (UIStore, {
    activeViewId: observable,
    showEmployee: action,
    showRoster: action,
    showSignedIn: action,
    showSignOut: action,
})

export default UIStore
