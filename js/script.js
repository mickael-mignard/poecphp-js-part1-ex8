
function calculerAutorisation(){
    var age = document.getElementById("age").value;   


    if(!Number.isInteger(parseInt(age)) && age != ""){
        alert("Veuillez saisir un nombre !")
        return;
    }

    if(age >= 18){
        return "Vous êtes majeur";
    }else{
        return "Vous êtes mineur";
    }     
}

function afficherAutorisation(){
    document.getElementById('resultat').innerHTML = calculerAutorisation();    
}