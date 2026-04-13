function addRow() {
    let table = document.getElementById("table");

    let row = table.insertRow();

    row.innerHTML = `
    <td><input type="number" value="1" onchange="calc()"></td>
    <td><input type="text"></td>
    <td><input type="number" value="0" onchange="calc()"></td>
    <td class="lineTotal">0</td>
    `;

    calc();
}

function calc() {
    let table = document.getElementById("table");
    let total = 0;

    for (let i = 1; i < table.rows.length; i++) {
        let qty = table.rows[i].cells[0].children[0].value;
        let price = table.rows[i].cells[2].children[0].value;

        let line = qty * price;
        table.rows[i].cells[3].innerText = line.toLocaleString();

        total += line;
    }

    document.getElementById("total").innerText = total.toLocaleString();
}
