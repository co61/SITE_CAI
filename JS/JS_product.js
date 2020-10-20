let product = document.getElementsByClassName("resultat");
let productsearch = document.getElementById("productsearch");


function displayResult()
{
	if (document.getElementById("rechercheProduit").value == "tronçonneuse") 
    {
        for (var i = 0; i < product.length ; i++) 
        {
            product[i].style.visibility ='visible';
        }    
    }
    else{
    	alert("Veuillez taper un nom de produit valide");
    }
}


