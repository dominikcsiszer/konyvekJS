class AdminView {
    constructor(adat) {
        this.adat = adat

        let tbody = $('tbody')
        adat.forEach(element => {
            let txt = '<tr> <th scope="row">'+ element.id +'</th> <td>'+ element.cim +'</td> <td>'+ element.szerzo +'</td> <td>'+ element.kiado +'</td> <td>'+ element.ar +'Ft</td> <td> <a href="#" class="btn btn-light">Megnéz</a> <a href="#" class="btn btn-light">Szerkeszt</a> <a href="#" class="btn btn-danger">Töröl</a> </td> </tr>'
            tbody.append(txt)
        })
    }
}

export default AdminView