import Model from "../models/model.js"
import EventModel from "../models/eventModel.js"

import View from "../views/View.js"

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
    }

    konyvData(data) {
        
        let adminView = new View(data, 'tbody', true)
        let normaliew = new View(data, '.konyvek')
    }
}

export default Controller