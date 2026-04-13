// Liste des articles prédéfinis
const ARTICLES = ["Platre", "Filasse", "Recuit", "Pointe Acier", "Pointe ordinaire", "Graissage", "Autre"];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Date auto
    const d = new Date();
    document.getElementById('current-date').value = d.toLocaleDateString('fr-FR');
    
    // Numéro auto (basé sur l'heure pour l'exemple)
    if(document.getElementById('doc-number').value === "") {
        document.getElementById('doc-number').value = d.getFullYear() + "-" + Math.floor(Math.random() * 1000);
    }

    // Ajouter la première ligne
    addRow();
});

function addRow() {
    const tbody = document.getElementById('table-body');
    const row = tbody.insertRow();
    
    // Création du Select
    let optionsHtml = ARTICLES.map(art => `<option value="${art}">${art}</option>`).join('');

    row.innerHTML = `
        <td><input type="number" value="1" class="qty" oninput="calculateTotal()"></td>
        <td>
            <select class="designation-select" onchange="handleOther(this)">
                ${optionsHtml}
            </select>
            <input type="text" class="other-input" style="display:none; margin-top:5px" placeholder="Précisez...">
        </td>
        <td><input type="number" value="0" class="price" oninput="calculateTotal()"></td>
        <td class="line-total text-right bold">0 FCFA</td>
    `;
    calculateTotal();
}

function handleOther(select) {
    const otherInput = select.nextElementSibling;
    otherInput.style.display = (select.value === "Autre") ? "block" : "none";
}

function calculateTotal() {
    const rows = document.getElementById('table-body').rows;
    let totalMateriel = 0;

    for (let row of rows) {
        const qty = parseFloat(row.querySelector('.qty').value) || 0;
        const price = parseFloat(row.querySelector('.price').value) || 0;
        const lineTotal = qty * price;
        
        row.querySelector('.line-total').innerText = formatMoney(lineTotal);
        totalMateriel += lineTotal;
    }

    document.getElementById('total-materiel').innerText = formatMoney(totalMateriel);
    
    const mainOeuvre = parseFloat(document.getElementById('main-oeuvre').value) || 0;
    const grandTotal = totalMateriel + mainOeuvre;
    
    document.getElementById('grand-total').innerText = formatMoney(grandTotal);
}

function formatMoney(amount) {
    return amount.toLocaleString('fr-FR') + " FCFA";
}
