function addRow() {
    let table = document.getElementById("table-body");
    let row = table.insertRow();

    row.innerHTML = `
        <td><input type="number" value="1" oninput="calc()"></td>
        <td><input type="text" placeholder="Désignation"></td>
        <td><input type="number" value="0" oninput="calc()"></td>
        <td class="lineTotal" style="text-align:right">0</td>
    `;
    calc();
}

function calc() {
    let table = document.getElementById("table-body");
    let totalMateriel = 0;

    for (let i = 0; i < table.rows.length; i++) {
        let qty = table.rows[i].cells[0].children[0].value || 0;
        let price = table.rows[i].cells[2].children[0].value || 0;
        let line = qty * price;
        
        table.rows[i].cells[3].innerText = line.toLocaleString() + " FCFA";
        totalMateriel += line;
    }

    document.getElementById("total-materiel").value = totalMateriel;
    updateGrandTotal();
}

function updateGrandTotal() {
    let mat = parseFloat(document.getElementById("total-materiel").value) || 0;
    let main = parseFloat(document.getElementById("main-oeuvre").value) || 0;
    let grandTotal = mat + main;
    
    document.getElementById("grand-total").innerText = grandTotal.toLocaleString() + " FCFA";
}
