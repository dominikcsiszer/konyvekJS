import AdminView from './adminView.js'
import VisitorView from './visitorView.js'
class View {

    #adat
    #parent
    #admin
    constructor(adat, parent, admin = false) {
        this.#adat = adat
        this.#parent = $(parent)
        this.#admin = admin
        this.html()
    }

    html() {
        this.#adat.forEach(element => {
            if (this.#admin) 
                new AdminView(this.#parent, element)
            else
                new VisitorView(this.#parent, element)
        })
    }
}

export default View