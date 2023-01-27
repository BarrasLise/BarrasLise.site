function clearscreen() {
    document.getElementById("resultat").value = "0";
}

function display(value) {
    let old = document.getElementById("resultat").value
    if (old == "0") {
        document.getElementById("resultat").value = "";
    }
    document.getElementById("resultat").value += value;  
}

function calculate() {
    let a = document.getElementById("resultat").value;
    let b = eval(a);
    document.getElementById("resultat").value = b;
}