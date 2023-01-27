
//sauvegarder le panier
function savePanier(panier) {
    localStorage.setItem("panier",JSON.stringify(panier));
}

//récupérer le item "panier" vide ou non.
function getPanier() {
    let panier = localStorage.getItem("panier");
    if (panier == null) {
        return [];
    } else {
        return JSON.parse(panier);
    }
}

//ajouter au panier
function addPanier(produit) {
    let panier = getPanier();
    let foundProduit = panier.find(p => p.id == produit.id);
    if(foundProduit != undefined) {
        foundProduit.quantite++;
    } else {
        produit.quantite = 1;
        panier.push(produit);
    }
    savePanier(panier);
}
