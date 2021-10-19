let BtnAjouter = document.getElementById("btn-ajouter");
let BtnEffacer = document.getElementById("btn-effacer");
let titre = document.getElementById("intitule");
let sum = document.getElementById("somme");
let listDep = document.getElementById("list-depenses"); 
let totalDep = document.getElementById("total-dep");

let allDep = 0;

BtnAjouter.addEventListener("click", () => {

 let sommeValue = sum.value;
 //console.log(typeof sommeValue);
 let intituleValue = titre.value;

 //console.log(sommeValue + " " + intituleValue);
if(sommeValue.trim().length == 0 || intituleValue.trim().length == 0){
  //console.log("errrreuuur");
  showAlert(); //appel de l'alerte
}
 let newDep = document.createElement('ion-item');
 let newDepLabel = document.createElement('ion-label');
 newDepLabel.textContent = `${intituleValue} :: ${sommeValue} $`;   
 newDep.appendChild(newDepLabel);
 listDep.appendChild(newDep);

 //allDep += Number(sommeValue);
 allDep += +sommeValue;

 totalDep.textContent = `${allDep} $`;

});

BtnEffacer.addEventListener("click", clear);

function clear(){
 titre.value = " "; 
 sum.value = " ";
}

function showAlert(){ //creer et afficher une alerte
 const alert = document.createElement('ion-alert');
 alert.header = 'Erreur';
 //alert.subHeader = 'Subtitle';
 alert.message ='Veuillez remplir les deux entrées!';
 alert.buttons = ['OK', 'Cancel'];

 document.body.appendChild(alert);
 return alert.present();

 
}
