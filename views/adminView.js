class AdminView {
    #eleme
    constructor(PARENT, element) {
        this.#eleme = element

        let html = '<tr> <th scope="row">'+ element.id +'</th> <td>'+ element.cim +'</td> <td>'+ element.szerzo +'</td> <td>'+ element.kiado +'</td> <td>'+ element.ar +'Ft</td> <td class="text-end"> <a href="#" class="btn btn-light"><i class="bi bi-eye"></i> Megnéz</a> <a href="#" class="btn btn-light" id="s'+element.id+'"><i class="bi bi-pencil"></i> Szerkeszt</a> <a href="#" class="btn btn-danger torol" id="t'+element.id+'"><i class="bi bi-trash"></i> Töröl</a> </td> </tr>'
        PARENT.append(html)

        $('#t'+element.id).on('click', () => {
            this.kattintasTrigger('torol')
        })
        $('#s'+element.id).on('click', () => {
            this.kattintasTrigger('edit')
        })
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#eleme.id, esemenyNeve})
        window.dispatchEvent(esemeny)
    }
}

export default AdminView