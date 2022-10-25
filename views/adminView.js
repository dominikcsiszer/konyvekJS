class AdminView {
    #eleme
    constructor(PARENT, element) {
        this.#eleme = element

        let html = `<tr id="tr${element.id}"> 
        <th scope="row">${element.id}</th> 
        <td>${element.cim}</td> 
        <td>${element.szerzo}</td> 
        <td>${element.kiado}</td> 
        <td>${element.ar}Ft</td> 
        <td class="text-end"> 
        <div id="allBtn">
            <a href="#" class="btn btn-light"><i class="bi bi-eye"></i> Megnéz</a> 
            <a href="#" class="btn btn-light" id="s${element.id}"><i class="bi bi-pencil"></i> Szerkeszt</a> 
            <a href="#" class="btn btn-danger torol" id="t${element.id}"><i class="bi bi-trash"></i> Töröl</a> </td> </tr>
        </div>
        <div id="editBtn" style="display: none;">
            <a href="#" class="btn btn-light"><i class="bi bi-eye"></i> Megnéz</a>
            <a href="#" class="btn btn-light" id="s'+element.id+'"><i class="bi bi-pencil"></i> Szerkeszt</a>
            <a href="#" class="btn btn-danger torol" id="t'+element.id+'"><i class="bi bi-trash"></i> Töröl</a> 
        </div>`
        PARENT.append(html)

        $('#t'+element.id).on('click', () => {
            this.kattintasTrigger('torol')
        })
        $('#s'+element.id).on('click', () => {
            let html = ""
            html += `<th scope="row">${element.id}</th>
                    <td><input class="form-control" type="text" value="${element.cim}" name="cim" id="cim"></td>
                    <td><input class="form-control" type="text" value="${element.szerzo}" name="cim" id="cim"></td>
                    <td><input class="form-control" type="text" value="${element.kiado}" name="cim" id="cim"></td>
                    <td><input class="form-control" type="number" value="${element.ar}" name="cim" id="cim"></td>
                    <td>
                        <a href="#" class="btn btn-success" id="trS${element.id}"><i class="bi bi-pencil"></i> Szerkeszt</a>
                        <a href="#" class="btn btn-light" id="trM${element.id}"><i class="bi bi-x"></i> Mégse</a>
                    </td>`
            $('#allBtn').css('display', 'none')
            $('#tr'+ element.id).html(html)
        })

        // Eventek
        $('#trM'+element.id).on('click', () => {
            console.log("asd");
            // let html = ""
            // html += `<th scope="row">${element.id}</th>
            //         <td>${element.cim}</td>
            //         <td>${element.szerzo}</td>
            //         <td>${element.kiado}</td>
            //         <td>${element.ar}</td>`
            // $('#tr'+ element.id).html(html)
        })

        $('#trS'+element.id).on('click', () => {
            this.kattintasTrigger('edit')
        })
        
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#eleme.id})
        window.dispatchEvent(esemeny)
    }
}

export default AdminView