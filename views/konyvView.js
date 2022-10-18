class KonyvView {
    #adat
    #parent
    #id
    constructor(adat, PARENT, id) {
        this.#adat = adat
        this.#parent = $(PARENT)
        this.#id = id
        let konyv = this.#adat[this.#id]

        $('.container h1').html(`<h1>${konyv.cim}</h1>`)
        let html = `<p class="text-muted">Kiadás dátuma: ${konyv.datum}</p>`
        html += `<div class="row">`
            html += `<div class="col-md-4"></div>`
            html += `<div class="col-md-4">`
                html += `<h5>Adatok</h5>`
                html +=`<table class="table">`
                    html += `<thead>`
                        html += `<tr>`
                            html += `<th scope="col">#</th>`
                            html += `<th scope="col">Könyv neve</th>`
                            html += `<th scope="col">Szerző</th>`
                            html += `<th scope="col">Kiadó</th>`
                            html += `<th scope="col">Ára (Ft)</th>`
                        html += `</tr>`
                    html += `</thead>`
                    html += `<tbody>`
                        html += `<tr>`
                            html += `<th scope="col">${konyv.id}</th>`
                            html += `<td>${konyv.cim}</td>`
                            html += `<td>${konyv.szerzo}</td>`
                            html += `<td>${konyv.kiado}</td>`
                            html += `<td>${konyv.ar}</td>`
                        html += `</tr>`
                    html += `</tbody>`
                html +=`</table>`
                html += `<h5>Leírás</h5>`
                html += `<p>${konyv.cim} ${konyv.szerzo} ${konyv.mufaj}e.</p>`
                html += `<a href="#" class="btn btn-primary"><i class="bi bi-bag-plus"></i> Kosárba</a>`
            html += `</div>`
            html += `<div class="col-md-6">`
            html += `</div>`
            html += `<div class="col-md-4"></div>`
        html += `</div>`
        this.#parent.html(html)
    }
}

export default KonyvView