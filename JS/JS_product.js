
//Javascript pour la recherche d'un produit spécifique adapté aux besoins du client
//Nous l'avons codé seulemtn pour une recherche de tronçonneuse car c'était notre exemple et nous n'avons pas le temps de pousser plus loin avec un serveur ou une base de données par exemple
let product = document.getElementsByClassName("resultat");
let productsearch = document.getElementById("productsearch");


function displayResult()
{
	//Si le produit recherché est une tronçonneuse
	if (document.getElementById("rechercheProduit").value == "tronçonneuse") 
    {
    	//Nous affichons les résultats
        for (var i = 0; i < product.length ; i++) 
        {
            product[i].style.visibility ='visible';
        }    
    }
    //Sinon nous demandons de taper un nom de produit valide
    else{
    	alert("Veuillez taper un nom de produit valide, merci.");
    }
}

//Nous n'avons pas codé le fait d'arriver sur une fiche d'informations sur un produit spécifique lorsque nous cliquons dessus
function displayAlert(){
	alert("Nous sommes désolés, les informations supplémentaires sur le produit souhaité ne peuvent s'afficher pour le moment. Nous sommes désolés du désagrément occasionné. ");
}



