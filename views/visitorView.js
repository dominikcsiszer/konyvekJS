class VisitorView {
    #eleme
    constructor(PARENT, element)  {
        this.#eleme = element

        let html = '<div class="col-sm-12 col-md-4 col-lg-3 mt-3"><div class="card"><img src="./public/img/book.jpg" class="card-img-top" alt="Kép egy könyvről."><div class="card-body"><h5 class="card-title">'+ element.cim +'</h5><p class="card-text">'+ element.cim+ ' ' + element.szerzo + ' '+ element.mufaj +'e</p> <ul class="list-group list-group-flush"><li class="list-group-item">Szerző: '+ element.szerzo +'</li><li class="list-group-item">Múfaja: '+ element.mufaj +'</li><li class="list-group-item">Kiadás Dátuma: '+ element.datum +'</li><li class="list-group-item">Kiadó: '+ element.kiado +'</li><li class="list-group-item">Ára: '+ element.ar +'Ft</li></ul><a href="#" class="btn btn-primary mt-4" id="m'+element.id+'"><i class="bi bi-eye"></i> Megtekintés</a></div></div></div>'
        PARENT.append(html)

        $('#m'+element.id).on('click', () => {
            this.kattintasTrigger('konyv')
        })
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#eleme.id})
        window.dispatchEvent(esemeny)
    }
}

export default VisitorView