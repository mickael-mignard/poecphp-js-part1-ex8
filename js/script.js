/**
 * Compute authorization
 * 
 * @returns a string
 */
function computeAuthorization(){
    // Get input value
    let age = document.getElementById("age").value; 

    // Check if input is an integer
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

/**
 * Display authorization
 */
function displayAuthorization(){
    document.getElementById('result').innerHTML = computeAuthorization();    
}