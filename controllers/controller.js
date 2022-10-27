import Model from "../models/model.js"
import EventModel from "../models/eventModel.js"
import KosarModel from "../models/kosarModel.js"

import View from "../views/View.js"
import KonyvView from "../views/konyvView.js"
import KosarView from "../views/kosarView.js"

class Controller {
    
    constructor() {
        const model = new Model()
        model.fetchData('./adat.json', this.konyvData)

        $(window).on('torol', (e) => {
            new EventModel(e.detail, 'torol')
        })
        $(window).on('edit', (e) => {
            new EventModel(e.detail, 'edit')
        })

        const kosarModel = new KosarModel()
        $(window).on('kosar', (e) => {
            kosarModel.setKosar(e.detail.id, e.detail.cim, e.detail.ar)
            new KosarView(kosarModel.getLastItem(), '.kosarTable', kosarModel.getKosar().length)
        })

        // Kosár törlés
        $(window).on('kosarTorol', (e) => {
            console.log(e)
            // kosarModel.deleteKosar(e.detail[0])
            // new KosarView(kosarModel.getKosar(), '.kosarTable')
        })
    }
    
    konyvData(data) {
        new View(data, '.adminTable', true)
        new View(data, '.konyvek')
        $(window).on('konyv', (e) => {
            new KonyvView(data, '.konyvek', e.detail.id)
        })
    }
}

export default Controller