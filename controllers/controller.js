import Model from "../models/model.js"
import EventModel from "../models/eventModel.js"

import View from "../views/View.js"
import KonyvView from "../views/konyvView.js"

class Controller {
    
    constructor() {
        let model = new Model()
        model.fetchData('./adat.json', this.konyvData)

        $(window).on('torol', (e) => {
            new EventModel(e.detail, 'torol')
        })
        $(window).on('edit', (e) => {
            new EventModel(e.detail, 'edit')
        })

        // Könyv view
    }
    
    konyvData(data) {
        new View(data, 'tbody', true)
        new View(data, '.konyvek')
        $(window).on('konyv', (e) => {
            new KonyvView(data, '.konyvek', e.detail)
        })
    }
}

export default Controller