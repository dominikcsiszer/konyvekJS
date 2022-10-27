class KosarModel {
    #kosar = []
    constructor() {

    }

    setKosar(id, cim, ar) {
        this.#kosar.push({id, cim, ar})
    }

    getKosar() {
        return this.#kosar
    }

    getLastItem() {
        return this.#kosar[this.#kosar.length-1]
    }
}

export default KosarModel