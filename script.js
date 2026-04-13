function addRow() {
    let table = document.querySelector("#table tbody");

    let row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="number" value="1" oninput="calc()"></td>

    <td>
    <select onchange="custom(this)">
        <option>Platre</option>
        <option>Filasse</option>
        <option>Recuit</option>
        <option>Pointe Acier</option>
        <option>Pointe ordinaire</option>
        <option>Graissage</option>
        <option value="custom">Autre...</option>
    </select>
    </td>

    <td><input type="number" value="0" oninput="calc()"></td>

    <td class="montant">0</td>
    `;

    table.appendChild(row);
}

function calc() {
    let rows = document.querySelectorAll("#table tbody tr");
    let totalMat = 0;

    rows.forEach(r => {
        let q = r.children[0].children[0].value;
        let p = r.children[2].children[0].value;

        let m = q * p;
        r.children[3].innerText = m.toLocaleString();

        totalMat += m;
    });

    document.getElementById("materiel").innerText = totalMat.toLocaleString();

    let main = parseInt(document.getElementById("main").value) || 0;

    let total = totalMat + main;

    document.getElementById("total").innerText = total.toLocaleString() + " FCFA";
}

function custom(select) {
    if (select.value === "custom") {
        let input = document.createElement("input");
        input.placeholder = "Entrer désignation";
        select.parentNode.replaceChild(input, select);
    }
}
