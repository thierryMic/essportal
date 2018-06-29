import { decorate, computed, observable} from 'mobx'

class UIStore {

    activeViewId = null

    setView (link, nav=false) {
        if (nav || link !== window.location.pathname) {
            this.activeViewId = link
            nav !==true && window.history.pushState(null, null, link)
        }
    }
}


decorate (UIStore, {
    activeViewId: observable,
})

export default UIStore
