// Mon code Javascript  --  Thibaut Picart


let rayonpict1 = document.getElementById("rayonpict1");    // on récupère les 2 images correspondant au rayon
let rayonpict2 = document.getElementById("rayonpict2");
let btnRechercheRayon = document.getElementById("btnRechercheRayon");  // le bouton de recherche d'un produit (btn barre de recherche)
let btnVoirDescriptif= document.getElementById("voirDescriptif");   // bouton qui lie vers la page de détail produit


btnRechercheRayon.addEventListener("click", () => 
{
    updateImage();      // lorsqu'on clique sur le bouton de recherche on appelle la fct updateImage()
})

function updateImage() // fonction qui change l'image du rayon en fonction du pdt recherché ( également appelé via bouton "entrée" cf code html)
{
     if (document.getElementById("rechercheRayon").value == "tronçonneuse") 
    {
        rayonpict1.src ="../img/rayons/rayon1_tronconneuse.png";
        rayonpict2.src ="../img/rayons/rayon2.png";
        btnVoirDescriptif.style.visibility = "visible";  // si le produit est connu on fait apparaitre le bouton amenant au descriptif 
    }

    else if (document.getElementById("rechercheRayon").value == "tondeuse") 
    {
        rayonpict1.src ="../img/rayons/rayon1_tondeuse.png";
        rayonpict2.src ="../img/rayons/rayon2.png";
        btnVoirDescriptif.style.visibility = "visible";
    }

    else if (document.getElementById("rechercheRayon").value == "sécateur") 
    {
        rayonpict2.src ="../img/rayons/rayon2_secateur.png";
        rayonpict1.src ="../img/rayons/rayon1.png";
        btnVoirDescriptif.style.visibility = "visible";
    }

    else
    {
        alert("Nous n'avons pas ce produit en stock.");
    }
}

