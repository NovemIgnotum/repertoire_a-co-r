function estChiffre(chaine) {
    var regex = /^[0-9]+$/;
    return regex.test(chaine);
  }

function verifInput(prenom, nom, num) {
    //Appel de la focntion pour vérifier si le numéro est 
    //bien composé uniquement de chiffre
    var verifNum = estChiffre(num);

    //Test pour verifier si les champs sont remplis
    if (prenom == "" ||nom == "" || num == "") {
        alert("Merci de renseigner tous les \u00E9l\u00E9ments.");
        var verif = false; 
    }
    else if (verifNum == false ) {
        alert("Le num\u00E9ro n'est pas valide.");
        verif = false;
    }
    else {
        verif ==  true
    }

    return verif;
}

function ajoutContact(tableID,formID) {
    //Récupération des éléments du formulaire
    var form = document.getElementById(formID);
    var table = document.getElementById(tableID);
    var prenomInput = document.getElementById("prenom").value;
    var nomInput = document.getElementById("nom").value;
    var numInput = document.getElementById("num").value;
    var verif = verifInput(prenomInput,nomInput, numInput);
    if (verif ==  false) {
        return;
    }
    //Création de la ligne
    var newLine = table.insertRow(1);

    //Création des cellules
    var prenomCell = newLine.insertCell(0);
    var nomCell = newLine.insertCell(1);
    var numCell = newLine.insertCell(2);
    var deleteCell = newLine.insertCell(3); // Ajout de la cellule pour le bouton Supprimer

    //Attribution des variables au cellules
    var prenomText = document.createTextNode(prenomInput);
    var nomText = document.createTextNode(nomInput);
    var numText = document.createTextNode(numInput);

    prenomCell.appendChild(prenomText);
    nomCell.appendChild(nomText);
    numCell.appendChild(numText);

    table.style.border = 'none';
    table.style.borderCollapse = 'collapse';
    
    //Suppression des bordures de gauche
    prenomCell.style.borderLeft = 'none';
    nomCell.style.borderLeft = 'none';
    numCell.style.borderLeft = 'none';
    deleteCell.style.borderLeft = 'none';

    //Suppression des bordures de droite
    prenomCell.style.borderRight = 'none';
    nomCell.style.borderRight = 'none';
    numCell.style.borderRight = 'none';
    deleteCell.style.borderRight = 'none';
    
    //Suppression des bordures supérieur
    prenomCell.style.borderTop = 'none';
    nomCell.style.borderTop = 'none';
    numCell.style.borderTop = 'none';
    deleteCell.style.borderTop = 'none';

    //Mettre le texte des cellules à gauche
    prenomCell.style.textAlign = 'left';
    nomCell.style.textAlign = 'left';
    numCell.style.textAlign = 'left';

    //Récupération de l'image pour le bouton supprimer
    var img =  document.createElement('img');
    img.src = 'image/poubelle.png';
    //Dimensions de l'image
    img.height = 20;
    img.width = 20;


    //Gestion de l'événement du bouton supprimer
    var deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = 'transparent';
    deleteButton.style.border = 'none'; // Supprimer la bordure du bouton
    deleteButton.style.outline = 'none'; // Supprimer le contour du bouton

    deleteButton.appendChild(img);
    deleteButton.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
    });
    deleteButton.addEventListener('click', function() {
      var currentRow = this.parentNode.parentNode;
      currentRow.parentNode.removeChild(currentRow);
    });

    deleteCell.appendChild(deleteButton);

    //Mettre le bouton à gauche
    deleteCell.style.textAlign = 'left';

    form.reset();
}