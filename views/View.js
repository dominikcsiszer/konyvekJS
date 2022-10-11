class View {

    #adat
    #parent
    constructor(adat, parent, admin = false) {
        this.#adat = adat
        this.#parent = parent
        this.html(this.#adat, this.#parent, admin)
    }

    html(adat, parent, admin) {
        const PARENT = $(parent)
        adat.forEach(element => {
            let html
            if (admin) 
                html = '<tr> <th scope="row">'+ element.id +'</th> <td>'+ element.cim +'</td> <td>'+ element.szerzo +'</td> <td>'+ element.kiado +'</td> <td>'+ element.ar +'Ft</td> <td> <a href="#" class="btn btn-light">Megnéz</a> <a href="#" class="btn btn-light">Szerkeszt</a> <a href="#" class="btn btn-danger">Töröl</a> </td> </tr>'
            else
                html = '<div class="col-sm-12 col-md-4 col-lg-3 mt-3"><div class="card"><img src="../public/img/book.jpg" class="card-img-top" alt="Kép egy könyvről."><div class="card-body"><h5 class="card-title">'+ element.cim +'</h5><p class="card-text">'+ element.cim+ ' ' + element.szerzo + ' '+ element.mufaj +'e</p> <ul class="list-group list-group-flush"><li class="list-group-item">Szerző: '+ element.szerzo +'</li><li class="list-group-item">Múfaja: '+ element.mufaj +'</li><li class="list-group-item">Kiadás Dátuma: '+ element.datum +'</li><li class="list-group-item">Kiadó: '+ element.kiado +'</li><li class="list-group-item">Ára: '+ element.ar +'Ft</li></ul><a href="#" class="btn btn-primary mt-4">Vásárlás</a></div></div></div>'
            PARENT.append(html)
        })
    }
}

export default View