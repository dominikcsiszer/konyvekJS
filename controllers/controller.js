import Model from "./models/model.js"
import View from "./views/View.js"

class Controller {
    
    constructor() {
        let model = new Model()
        model.fetchData('./adat.json', this.konyvData)
    }

    konyvData(data) {
        let adminView = new View(data, 'tbody', true)
        let normaliew = new View(data, '.konyvek')
    }
}

export default Controller