class KosarView {
    #kosar
    constructor(kosar, PARENT, i) {
        this.#kosar = kosar

        // HTML
        let html = `<tr>
        <td>${kosar.cim}</td>
        <td>${kosar.ar} Ft</td>
        <td>0 db</td>
        <td><a href="#" class="btn btn-danger" id="kT${kosar.id}"><i class="bi bi-trash"></i></a></td>
        </tr>`
        
        $('#kT'+kosar.id).on('click', () => {
            console.log("asd")
            this.kattintasTrigger('kosarTorol')
        })
        
        $(PARENT).append(html)
        
        // Ár összesen
        let osszesen = 0
        osszesen += kosar.ar
        $('.kosarOsszAr').html(osszesen + ' Ft')
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#kosar})
        window.dispatchEvent(esemeny)
    }
}

export default KosarView