const app = () => {

  return {  

    // légende pour chaque élément de gameplay
    legend : {
      0 : "Élément vide", // blanc

      1 : "Sortie du niveau", // vert

      2 : "Bordures", // noir

      3 : "Position du laser", // rouge

      4 : "Mine", // gris

      5 : "Port de piratage caméra", // jaune
      6 : "Champ de vision caméra", // orange

      7 : "Position du joueur"

      /* BONIFICATION
      8 : "Trappe (-1)",
      9 : "Tremplin (+1)" */
    },

    calquesText : {
      "Exit" : "Sortie du niveau",
      "Bordures" : "Bordures du niveau",
      "Mines" : "Emplacements des mines",
      "Camera" : "Champ de vision de la caméra et port de piratage de celle-ci",
      "Laser" : "Position actuelle du laser et informations sur le prochain déplacement de celui-ci"

      /* BONIFICATION 
          "Etage" : "Position des trappes et des tremplins", */
    },

    calquesExplanationActive : {
      "Exit" : "La bordure qui permet au prisonnier de s'échapper est traversable.",
      "Bordures" : "Les bordures du niveau sont traversables.",
      "Mines" : "Les mines ne se déclenchent pas lorsque le joueur entre dans une case qui en contient.",
      "Camera" : "La caméra ne fonctionne plus, entrer dans son champ de vision n'a pas d'effet.",
      "Laser" : "Le nombre de cycle du laser est bloqué et le laser éteint tant que le calque désactivé ne change pas."
    },

    calquesGameDesign : {
    "Exit" : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
    ],
    "Bordures" : [
        [2, 2, 2, 2, 2, 2, 2, 2, 2], // Ligne : Bordures
        [2, 0, 0, 0, 2, 0, 0, 0, 2], // Ligne : Case
        [2, 2, 0, 0, 2, 0, 0, 2, 2],
        [2, 0, 0, 0, 2, 0, 0, 0, 2], // Ligne : Case
        [2, 0, 2, 2, 2, 0, 2, 2, 2],
        [2, 0, 2, 0, 0, 0, 2, 0, 2], // Ligne : Case
        [2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 2, 0, 0, 0, 2], // Ligne : Case
        [2, 2, 2, 2, 2, 2, 2, 2, 2], // Ligne : Bordures
    ],
    "Mines" : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 4, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 4, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
    ],
    "Camera" : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 0, 6, 0, 6, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 6, 0, 6, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
    ],
    "Laser" : [
        [3, 3, 3, 3, 3, 3, 3, 3, 3], // Ligne : Bordures
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
    ]},
  

    // Calques : propriétés
    listCalques : ['Exit', 'Bordures', 'Mines', 'Laser', 'Camera'],

    // Interface COMMUNE
    nbCycle : null,
    nbTry : null,
    joueurActif : null,
    giveHand : null,
    roles : ['SPY', 'PRISONNER'],

    modalRules : false,
    modalHistory : false,

    apparenceChess : false,
    apparenceRepere : true,

    // Interface SPY
    allCalques : false,
    calqueVisible : null,
    calqueActif : null,

    nbCycleBeforeMoveLaser : null,

    // Interface PRISONNER
    positionAbsPlayer : null,
    positionOrdPlayer : null,

    moves : ['TOP', 'BOTTOM', 'LEFT', 'RIGHT'],
    actions : ['Disjoncter', 'TopDeminage', 'BottomDeminage', 'LeftDeminage', 'RightDeminage', 'Pirater'],

    playerPosition : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
        [0, 7, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Case
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // Ligne : Bordures
    ],

    init(){

        this.nbCycle = 0 ;
        this.nbTry = 0 ;
        this.joueurActif = this.roles[0];

        this.nbCycleBeforeMoveLaser = 4 ;

        this.displayGrid(this.playerPosition);
    },

    playerPos(){
      let ligneTrouvee = -1;
      let colonneTrouvee = -1;

      for (let i = 0; i < this.playerPosition.length; i++) {
        const colonne = this.playerPosition[i].indexOf(7); // Recherche l'indice du chiffre 7 dans chaque ligne
        if (colonne !== -1) { // Si le chiffre 7 est trouvé
          ligneTrouvee = i;
          colonneTrouvee = colonne;
          break; // Arrête la recherche une fois que 7 est trouvé
        }
      }

      if (ligneTrouvee !== -1 && colonneTrouvee !== -1) {
        return [ligneTrouvee, colonneTrouvee];
      }
    },

    updateGrid(nouvelleLigne, nouvelleColonne){
      for (let i = 0; i < this.playerPosition.length; i++) {
        const colonne = this.playerPosition[i].indexOf(7); // Recherche de l'ancien 7
        if (colonne !== -1) {
          this.playerPosition[i][colonne] = 0; // Remplace l'ancien 7 par 0
          break; // Arrête la recherche après avoir trouvé l'ancien 7
        }
      }
    
      // Placer le nouveau 7 à la nouvelle position
      if (this.playerPosition[nouvelleLigne] && this.playerPosition[nouvelleLigne][nouvelleColonne] !== undefined) {
        this.playerPosition[nouvelleLigne][nouvelleColonne] = 7;
        this.displayGrid(this.playerPosition);
      } else {
        console.log("Coordonnées invalides.");
      }
    },

    player(move){
      let nbRow = 8;
      let nbColumn = 8;
      let coords = this.playerPos();

      switch(move){
        case 'TOP':
          if (coords[0] > 2) {
            this.updateGrid(coords[0]-2, coords[1]);
          } else {
            alert('Game over, vous avez touché une bordure extérieure');
          }
          break;
        case 'LEFT':
          if (coords[1] > 2) {
            this.updateGrid(coords[0], coords[1]-2);
          } else {
            alert('Game over, vous avez touché une bordure extérieure');
          }
          break;
        case 'RIGHT':
          if (coords[1] < nbColumn-2) {
            this.updateGrid(coords[0], coords[1]+2);
          } else {
            alert('Game over, vous avez touché une bordure extérieure');
          }
          break;
        case 'BOTTOM':
          if (coords[0] < nbRow-2) {
            this.updateGrid(coords[0]+2, coords[1]);
          } else {
            alert('Game over, vous avez touché une bordure extérieure');
          }
          break;
      }
    },

    displayGrid(calque){
      const gridElement = document.querySelector('.gridPrisonner');
      
      const lettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
      const taille = 9;
    
      // Effacer le contenu précédent (si nécessaire)
      gridElement.innerHTML = '';
    
      // Créer la première ligne avec des lettres
      const premiereLigne = document.createElement('div');
      premiereLigne.classList.add('row');
    
      // Ajouter une cellule vide au début pour l'intersection vide entre chiffres et lettres
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('cell', 'header-cell', 'border');
      premiereLigne.appendChild(emptyCell);
    
      // Ajouter les lettres en abscisses
      let typeCaseColumn = 'border';
      lettres.forEach(lettre => {
        const lettreCell = document.createElement('div');
        lettreCell.classList.add('cell', 'header-cell', typeCaseColumn);
        lettreCell.innerText = lettre;
        premiereLigne.appendChild(lettreCell);

        if (typeCaseColumn  === 'border') {
          typeCaseColumn  = 'tile' ;
        } else {
          typeCaseColumn  = 'border';
        }
      });
    
      gridElement.appendChild(premiereLigne);
    
      // Ajouter les lignes avec chiffres en ordonnée
      for (let i = 1; i <= taille; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
    
        // Ajouter le chiffre de l'ordonnée dans la première colonne
        if (i % 2 === 1) {
          typeCaseRow = 'intersectionRow';
        } else {
          typeCaseRow = 'border';
        }

        const chiffreCell = document.createElement('div');
        chiffreCell.classList.add('cell', 'header-cell', typeCaseRow);
        chiffreCell.innerText = i;
        rowElement.appendChild(chiffreCell);

        // Ajouter les cellules vides (ou avec contenu si besoin)
        for (let j = 1; j <= taille; j++) {
          const cell = document.createElement('div');

          let typeCase;
          if (j % 2 === 0 && i % 2 === 1) {
            typeCase = 'borderRow';
          } else if (j % 2 === 1 && i % 2 === 1){
            typeCase = 'intersectionRow';
          } else if (j % 2 === 1 && i % 2 === 0){
            typeCase = 'border';
          } else if (j % 2 === 0 && i % 2 === 0){
            typeCase = 'tile';
          }
          
          let idColor = this.playerPosition[i-1][j-1];
          cell.classList.add('cell', typeCase, `cell-${idColor}`);
  

          rowElement.appendChild(cell);
        }
    
        gridElement.appendChild(rowElement);
      }
    },

    displayCalque(calque){

      if (this.listCalques.includes(calque)) {

        if (this.calqueVisible !== null) {
          this.calqueActif = this.calqueVisible ;
          this.nbCycle++ ;
          // this.nbCycleBeforeMoveLaser--  ;
        }

        this.calqueVisible = calque ;

        const gridElement = document.querySelector('.grid');
      
        const lettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        const taille = 9;
      
        // Effacer le contenu précédent (si nécessaire)
        gridElement.innerHTML = '';
      
        // Créer la première ligne avec des lettres
        const premiereLigne = document.createElement('div');
        premiereLigne.classList.add('row');
      
        // Ajouter une cellule vide au début pour l'intersection vide entre chiffres et lettres
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('cell', 'header-cell', 'border');
        premiereLigne.appendChild(emptyCell);
      
        // Ajouter les lettres en abscisses
        let typeCaseColumn = 'border';
        lettres.forEach(lettre => {
          const lettreCell = document.createElement('div');
          lettreCell.classList.add('cell', 'header-cell', typeCaseColumn);
          lettreCell.innerText = lettre;
          premiereLigne.appendChild(lettreCell);

          if (typeCaseColumn  === 'border') {
            typeCaseColumn  = 'tile' ;
          } else {
            typeCaseColumn  = 'border';
          }
        });
      
        gridElement.appendChild(premiereLigne);
      
        // Ajouter les lignes avec chiffres en ordonnée
        for (let i = 1; i <= taille; i++) {
          const rowElement = document.createElement('div');
          rowElement.classList.add('row');
      
          // Ajouter le chiffre de l'ordonnée dans la première colonne
          if (i % 2 === 1) {
            typeCaseRow = 'intersectionRow';
          } else {
            typeCaseRow = 'border';
          }

          const chiffreCell = document.createElement('div');
          chiffreCell.classList.add('cell', 'header-cell', typeCaseRow);
          chiffreCell.innerText = i;
          rowElement.appendChild(chiffreCell);

          // Ajouter les cellules vides (ou avec contenu si besoin)
          for (let j = 1; j <= taille; j++) {
            const cell = document.createElement('div');

            let typeCase;
            if (j % 2 === 0 && i % 2 === 1) {
              typeCase = 'borderRow';
            } else if (j % 2 === 1 && i % 2 === 1){
              typeCase = 'intersectionRow';
            } else if (j % 2 === 1 && i % 2 === 0){
              typeCase = 'border';
            } else if (j % 2 === 0 && i % 2 === 0){
              typeCase = 'tile';
            }
            
            let idColor = this.calquesGameDesign[calque][i-1][j-1];
            cell.classList.add('cell', typeCase, `cell-${idColor}`);
    

            rowElement.appendChild(cell);
          }
      
          gridElement.appendChild(rowElement);
        }
      }
      
    }
      

        // Lancer la partie : rappel du niveau
        // Rappel du rôle puis de l'explication du rôle

        // Écran actif : SPY
        // Montrer tous les calques

        // Écran actif : PRISONNNER

  }
}

