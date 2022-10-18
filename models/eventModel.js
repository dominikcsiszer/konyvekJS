class EventModel {
    #id
    constructor(id, esemeny) {
        this.#id = id
        if(esemeny == 'torol')
            this.deleteData()
        else if(esemeny == 'edit')
            this.editData()
    }

    deleteData() {
        console.log("Töröltem a(z) "+this.#id+" id-t")
    }
    
    editData() {
        console.log("Szerkesztettem a(z) "+this.#id+" id-t")

    }
}

export default EventModel