document.addEventListener("DOMContentLoaded", (event) => {

    // CTA
    let buttonGrille = document.getElementById("calculerGrille");

    // évènements

    // Envoie les dimensions du niveau voulues par l'U
    buttonGrille.addEventListener("click", () => {
        // nombre de CASES VIRTUELLES dans la longueur et dans la largeur de la grille
        let longGrille = Number(document.getElementById("longueurGrille").value);
        let largGrille = Number(document.getElementById("largeurGrille").value);

        // Laser, bordure extérieure, intérieure de la grille, bordure extérieure et laser
        // = nombre de CASES REELLES dans la longueur et la largeur de la grille
        const nbCasesLongeur = 1 + 1 + longGrille + (longGrille-1) + 1 + 1 ;
        const nbCasesLargeur = 1 + 1 + largGrille + (largGrille-1) + 1 + 1 ;

        document.getElementById("calcul").innerHTML = 
            "Nombre de cases en <b>X = " + nbCasesLongeur +
            "</b> et en <b>Y = " + nbCasesLargeur + "</b>.";

        // affichage de la grille avex toutes les cases réelles soit en incluant les bordures    
        construirePlan(nbCasesLongeur, nbCasesLargeur, longGrille, largGrille);
    });

    function construirePlan(VCasesX, VCasesY, reelCasesX, reelCasesY) {
        let container = document.getElementById('planNiveau');
        container.innerHTML = "";
        container.style.gridTemplateColumns = `repeat(${VCasesX}, 1fr)`;

        let tabCases = [] ;

        cDep = (VCasesX*2) + 2 ;
        tabCases.push(cDep);
        // remplissage du tableau des Cases
        for (let iteration = 0; iteration < reelCasesY ; iteration++){
            for (let nbCasesEnLigne = 1 ; nbCasesEnLigne < reelCasesX; nbCasesEnLigne++){
                cDep += 2;
                tabCases.push(cDep);    
            }
            if (iteration < reelCasesY-1 ){
                cDep += VCasesX + 5 ;
                tabCases.push(cDep);
            }
        }

        let tabLaser = [];
        for (let i=0; i < VCasesX; i++){
            tabLaser.push(i);
        }
        for (let i=1; i < VCasesY; i++){
            tabLaser.push(i*VCasesX);
            if (i === VCasesY-1) {
                for (let index=1; index < VCasesX; index++){
                    tabLaser.push(i*VCasesX+index);
                }
            } else {
                tabLaser.push(i*VCasesX+(VCasesX-1));
            }
        }
        console.log(tabLaser);


        let comptC = 0 ;
        let comptL = 0 ;

        // Générer la grille avec les éléments (Bordure ou case)
        for (let i = 0; i < VCasesX * VCasesY; i++) {
            let item = document.createElement("div");

            if (i === tabCases[comptC]){
                item.className = "itemCase";
                comptC++ ;
            } else if (i === tabLaser[comptL]){
                item.className = "itemLaser";
                comptL++ ;
            } else {
                item.className = "itemBorder";
            }
            item.textContent = i+1 ; // numérote les cellules à partir de 0
            container.appendChild(item);
        }
    }

});


// remplir la grille en choissisant un élément bouton radio

// affichage des éléments sur le calque 

// vérfication de la présence d'une unique entrée et d'une unique sortie
// 1 entrée et sortie dans le CUBE

// vérification si il n'y a pas de superposition 
// d'élément sur les calques du même niveeau

// exporter le dessin du niveau pour créer un tableau 
// pour chaque calque avec les valeurs associées

/* BONIFICATION
// si ajout de trappe (-1)
// message de confirmation de création d'une couche inférieure

// si ajout de tremplin (+1)
// message de confirmation de création d'une couche supérieure
*/

