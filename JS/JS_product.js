//Javascript for the research of the good product page
//We've only done it for chainsaw because it's our example and we don't have much time

let product = document.getElementsByClassName("resultat");
let productsearch = document.getElementById("productsearch");


function displayResult()
{
	//when the product asked is a chainsaw
	if (document.getElementById("rechercheProduit").value == "tronçonneuse") 
    {
    	//we display the results 
        for (var i = 0; i < product.length ; i++) 
        {
            product[i].style.visibility ='visible';
        }    
    }
    //else we ask to type another product
    else{
    	alert("Veuillez taper un nom de produit valide");
    }
}


