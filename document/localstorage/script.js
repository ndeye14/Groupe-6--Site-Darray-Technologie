//tableau des users
const tabUser =[];
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let age = document.getElementById("age");

//tableau frais utilisateurs

const tbody= document.getElementById("corps");

//fonction qui permet de recuperer la valeur des champs lorqkon clock

function onSubmit() {
    const user={
        prenom: prenom.value,
        nom: nom.value,
        age: age.value
    }
      resetForm();


      //ajout de user dans le tableau
      tabUser.push(user) ; 

      //ajout de uszr

      localStorage.setItem("users", JSON.stringify(tabUser));
      let local= JSON.parse(localStorage.getItem("users"));

    //   vider le tablaeau avant ajout
      tbody.innerHTML=``;
    addUser(local);
    console.log(local);
     
}

/**
 * fonction vider les champs dur formulaire

 */
function resetForm(){
    prenom.value= "";
    nom.value= "";
    age.value= "";
}
/**
 * ajout liste utlisateur

 */
function addUser(array){
    array.forEach(element => {
        
        const row = document.createElement("tr");
        const prenomTd = document.createElement("td");
        const nomTd = document.createElement("td");
        const ageTd = document.createElement("td");
        
        prenomTd.textContent=element.prenom;
        nomTd.textContent=element.nom;
        ageTd.textContent=element.age;
        row.append(prenomTd, nomTd, ageTd);
        tbody.appendChild(row);
    
    });
}



