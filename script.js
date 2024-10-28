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
      "Sortie" : "Sortie du niveau",
      "Bordures" : "Bordures du niveau",
      "Mines" : "Emplacements des mines",
      "Camera" : "Champ de vision de la caméra et port de piratage de celle-ci",
      "Laser" : "Position actuelle du laser et informations sur le prochain déplacement de celui-ci"

      /* BONIFICATION 
          "Etage" : "Position des trappes et des tremplins", */
    },

    calquesExplanationActive : {
      "Sortie" : "La bordure qui permet au prisonnier de s'échapper est traversable.",
      "Bordures" : "ATTENTION ! Les bordures du niveau ne sont JAMAIS traversables.",
      "Mines" : "Les mines ne se déclenchent pas lorsque le joueur entre dans une case qui en contient.",
      "Camera" : "La caméra ne fonctionne plus, entrer dans son champ de vision n'a pas d'effet.",
      "Laser" : "Le nombre de cycle du laser est bloqué et le laser éteint tant que le calque désactivé ne change pas."
    },

    calquesGameDesign : {
    "Sortie" : [
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
    listCalques : ['Sortie', 'Bordures', 'Mines', 'Camera', 'Laser'],

    // Interface COMMUNE
    nbCycle : null,
    nbTry : null,
    joueurActif : null,
    roles : ['SPY', 'PRISONNER'],
    spyBoard : false,

    modalRules : false,
    modalHistory : false,

    apparenceChess : false,
    apparenceRepere : true,

    // Interface SPY
    allCalques : false,
    calqueVisible : null,
    calqueActif : null,
    isDisabled : false,

    exploreAllLayers : false,

    nbCycleBeforeMoveLaser : null,

    // Interface PRISONNER
    positionAbsPlayer : null,
    positionOrdPlayer : null,

    moves : ['TOP', 'BOTTOM', 'LEFT', 'RIGHT'],
    actions : ['Disjoncter', 'Deminage', 'Pirater'],

    laserActuel : 0,

    nbDisjoncteur : 1,
    nbPiratage : 1,
    nbDeminage : 2,

    immuneLaser : false,

    history : [],

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

      this.nbCycle = 1 ;
      this.nbTry = 1 ;
      this.joueurActif = this.roles[0];
      this.joueurActif === 'SPY' ? this.spyBoard = true : this.spyBoard = false

      this.nbCycleBeforeMoveLaser = 4 ;

      this.history("> Partie initialisée : Cycle n°1, essai n°1 et joueur actif : SPY");
    },

    wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async explore(){
      for (calque of this.listCalques){
        this.displayGrid('SPY', calque, '.grid', false);
        await this.wait(800);
      }

      this.history("> L'espion a eu un aperçu de la configuration du CUBE");

      this.isDisabled = true ;
    },

    giveHand(whom){
      if (whom === this.roles[0]) {
        this.joueurActif = this.roles[0];

        this.history("> L'espion a désormais la main");

      } else {
        this.joueurActif = this.roles[1];
        this.displayGrid('PRISONNER', this.playerPosition, '.gridPrisonner', true);

        this.immuneCamera = false ;
        this.immuneLaser = false ;
        this.immuneMine = false ;

        this.history("> Le prisonnier a désormais la main");

      }
      this.joueurActif === 'SPY' ? this.spyBoard = true : this.spyBoard = false
      this.nbCycle++ ;
      this.nbCycleBeforeMoveLaser--;

      if (this.nbCycleBeforeMoveLaser === 0){
        this.moveLaser();
        let coordsPlayer = this.playerPos();

        this.history("> Déplacement du laser");

        if (coordsPlayer[0]+1 === this.laserActuel && this.immuneLaser === false) {
          alert('Le prisonnier a été rattrapé et grillé par le fil laser !');
          this.history("> ÉCHEC DE L\'ESSAI : Le prisonnier a été rattrapé et grillé par le fil laser");
          this.nbTry++ ;
        }
      }
    },

    history(action){
      var newAction = document.createElement('p');
      newAction.textContent = action ;

        // Sélectionner l'élément parent où insérer le paragraphe
        var parent = document.querySelector('.scrollable-div');

        if (parent) {
          parent.appendChild(newAction);
          parent.scrollTop = parent.scrollHeight - parent.clientHeight;
        }
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
        this.displayGrid('PRISONNER', this.playerPosition, '.gridPrisonner', true);
      } else {
        console.log("Coordonnées invalides.");
      }
    },

    player(move, action){
      let nbRow = 8;
      let nbColumn = 8;
      let coords = this.playerPos();

      let coordX = 0;
      let coordY = 0;
      let borderError = false;
      let immobile = false ;
      let direction = '';
      let camSuccess = false ;

      switch(move){
        case 'TOP':
          if (coords[0] > 2) {
            coordX = -1;
            coordY = 0 ;
            direction = 'le haut';
          } else {
            if (this.calqueActif === 'Sortie') {
              coordX = -1 ;
              coordY = 0 ;
            } else {
              borderError = true ;
            }
          }
          break;
        case 'LEFT':
          if (coords[1] > 2) {
            coordX = 0;
            coordY = -1;
            direction = 'la gauche';
          } else {
            if (this.calqueActif === 'Sortie') {
              coordX = 0 ;
              coordY = -1 ;
            } else {
              borderError = true ;
            }
          }
          break;
        case 'RIGHT':
          if (coords[1] < nbColumn-2) {
            coordX = 0;
            coordY = 1 ;
            direction = 'la droite';
          } else {
            if (this.calqueActif === 'Sortie') {
              coordX = 0 ;
              coordY = 1 ;
            } else {
              borderError = true ;
            }
          }
          break;
        case 'BOTTOM':
          if (coords[0] < nbRow-2) {
            coordX = 1 ;
            coordY = 0 ;
            direction = 'le bas';
          } else {
            if (this.calqueActif === 'Sortie') {
              coordX = 1 ;
              coordY = 0 ;
            } else {
              borderError = true ;
            }
          }
          break;
        case '':
          immobile = true ;
          if (action === this.actions[2]) {
            if (this.calquesGameDesign['Camera'][coords[0]][coords[1]] === 5){
              this.calquesGameDesign['Camera'] = this.calquesGameDesign['Camera'].map(row => row.map(() => 0));
              camSuccess = true ;
            }
          }
          break;
      }

      if (action === this.actions[1]){
        if (this.calquesGameDesign['Mines'][coords[0] + coordX*2][coords[1] + coordY*2] === 4){
          this.calquesGameDesign['Mines'][coords[0] + coordX*2][coords[1] + coordY*2] = 0 ;
          direction += ' après avoir désamorcé une mine avec succès!';
        } else {
          direction += ', il n\'y avait pas de mine à désamorcer sur la case d\'arrivée.';
        }
      }

      if (this.calqueActif === 'Sortie' && this.calquesGameDesign['Sortie'][coords[0] + coordX][coords[1] + coordY] === 1) {
        alert('VICTOIRE, vous réussi à vous échapper grâce à votre complice en ' + this.nbTry + ' essai(s) !');
        this.history('> Victoire en ' + this.nbTry + ' essai(s) !');
      } else if (this.calquesGameDesign['Bordures'][coords[0] + coordX][coords[1] + coordY] === 2) {
        alert('ÉCHEC DE L\'ESSAI de cette tentative d\'évasion, vous avez touché une bordure intérieure');
        this.history('> ÉCHEC DE L\'ESSAI, vous avez touché une bordure intérieure');
        this.nbTry++;
      } else if (this.calqueActif !== 'Mines' &&  this.calquesGameDesign['Mines'][coords[0] + coordX*2][coords[1] + coordY*2] === 4) {
        alert('ÉCHEC DE L\'ESSAI de cette tentative d\'évasion, vous avez déclenchez une mine');
        this.history('> ÉCHEC DE L\'ESSAI, vous avez déclenchez une mine');
        this.nbTry++;
        this.calquesGameDesign['Mines'][coords[0] + coordX*2][coords[1] + coordY*2] = 0 ;
      } else if (this.calqueActif !== 'Camera' &&  this.calquesGameDesign['Camera'][coords[0] + coordX*2][coords[1] + coordY*2] === 6) {
        alert('ÉCHEC DE L\'ESSAI de cette tentative d\'évasion, vous êtes entrer dans le champ de vision de la caméra!');
        this.history('> ÉCHEC DE L\'ESSAI, vous êtes entrer dans le champ de vision de la caméra!');
        this.nbTry++;
      } else if (move === '' && action === this.actions[2]){
        if (camSuccess) {
          this.history('> La caméra a été coupée, son champ de vision est désormais nul !');
        } else {
          this.history('> Le prisonnier a essayé de pirater la caméra de surveillance depuis une tuile qui ne le permettait pas !');
        }
      } else {
        if (!immobile) {
          this.updateGrid(coords[0] + coordX*2, coords[1] + coordY*2);
          this.history('> Le prisonnier s\'est déplacé vers ' + direction);
        } else {

          this.history('> Le prisonnier s\'est déplacé vers ' + direction);
        }
        
      }

      if (borderError) {
        alert('ÉCHEC DE L\'ESSAI de cette tentative d\'évasion, vous avez touché une bordure extérieure');
        this.history('> ÉCHEC DE L\'ESSAI, vous avez touché une bordure extérieure');
        this.nbTry++;
      }
    },

    reduce(compteur){
      switch(compteur){
        case 'nbPiratage':
          this.nbPiratage-- ;
          this.history('>>> Pirater (action spéciale) a été utilisé par le prisonnier');
          break;
        case 'nbDeminage':
          this.nbDeminage-- ;
          this.history('>>> Déminer (action spéciale) a été utilisé par le prisonnier');
          break;
        case 'nbDisjoncteur':
          this.nbDisjoncteur-- ;
          this.history('>>> Disjoncter (action spéciale) a été utilisé par le prisonnier');
          this.immuneLaser = true ;
          break;
      }
    },

    moveLaser(){
      // Vérifier si la ligne à décaler est valide
      if (this.laserActuel < 0 || this.laserActuel >= this.calquesGameDesign['Laser'].length) {
        console.log("Ligne invalide.");
        return;
      }

      // sens du Laser
      let decalage ;
      let reverse = false ;
      if (this.laserActuel === 8 || reverse === true) {
        if (this.laserActuel === 8) reverse === true ;
        decalage = -2 ;
      } else {
        if (this.laserActuel === 0) reverse = false ;
        decalage = 2 ;
      }

      // Calculer la nouvelle position de la ligne après le décalage
      let nouvelleLigne = this.laserActuel + decalage ;

      // Si la nouvelle position est avant la première ligne, on la borne à 0
      if (nouvelleLigne < 0) {
        nouvelleLigne = 0;
      }

      // Extraire la ligne à décaler
      const ligneDecalee = this.calquesGameDesign['Laser'][this.laserActuel].slice();

      // Remplacer l'ancienne ligne par une ligne vide
      this.calquesGameDesign['Laser'][this.laserActuel] = new Array(this.calquesGameDesign['Laser'][0].length).fill(0);

      // Placer la ligne décalée à la nouvelle position
      this.calquesGameDesign['Laser'][nouvelleLigne] = ligneDecalee;

      this.nbCycleBeforeMoveLaser = 4 ;
      this.laserActuel += decalage ;
    },

    displayGrid(side, calque, classHTML, boolCount){

      if (side === 'SPY' && boolCount === true && this.calqueVisible !== calque) {
        this.calqueActif = this.calqueVisible ;
        this.calqueVisible = calque ;
        this.nbCycle++ ;
        this.nbCycleBeforeMoveLaser-- ;

        if (this.calqueActif === null) this.calqueActif = 'Aucun';
        this.history(`> CHANGEMENTS : calque visible : ${calque}, calque actif : ${this.calqueActif}`);
        if (this.calqueActif === 'Aucun') this.calqueActif = null ;


        if (this.nbCycleBeforeMoveLaser === 0){
          this.moveLaser();
          let coordsPlayer = this.playerPos();

          this.history("> Déplacement du laser");

          if (coordsPlayer[0]+1 === this.laserActuel && this.immuneLaser === false) {
            alert('Le prisonnier a été rattrapé et grillé par le fil laser !');
            this.history("> ÉCHEC DE L\'ESSAI : Le prisonnier a été rattrapé et grillé par le fil laser");
            this.nbTry++ ;
          }
        }
      }

      const gridElement = document.querySelector(classHTML);
      
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
          
          let idColor ;
          if (side === 'PRISONNER'){
            idColor = this.playerPosition[i-1][j-1];
          } else if (side === 'SPY') {
            idColor = this.calquesGameDesign[calque][i-1][j-1];
          }

          cell.classList.add('cell', typeCase, `cell-${idColor}`);
  

          rowElement.appendChild(cell);
        }
    
        gridElement.appendChild(rowElement);
      }
    },


        // Lancer la partie : rappel du niveau
        // Rappel du rôle puis de l'explication du rôle

        // Écran actif : SPY
        // Montrer tous les calques

        // Écran actif : PRISONNNER

  }
}


document.addEventListener("DOMContentLoaded", function() {

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        player(moves[0], '');
        break;
      case 'ArrowLeft':
        player(moves[2], '');
        break;
      case 'ArrowRight':
        player(moves[3], '');
        break;
      case 'ArrowDown':
        player(moves[1], '');
        break;
      case 'w':
        reduce('nbDeminage');
        player(moves[0], 'Deminage');
        break;
      case 'a':
        reduce('nbDeminage');
        player(moves[2], 'Deminage');
        break;
      case 'd':
        reduce('nbDeminage');
        player(moves[3], 'Deminage');
        break;
      case 's':
        reduce('nbDeminage');
        player(moves[1], 'Deminage');
        break;
      case 'l':
        reduce('nbDisjoncteur') ;
        player('', 'Disjoncter');
        break;
      case 'p':
        reduce('nbPiratage') ; 
        player('', 'Pirater');
        break;
    }
  });

});

