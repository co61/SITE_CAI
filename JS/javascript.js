//test
function testalert(){
    alert("alert ca marche");
}

var d = new Date();
document.getElementById("date").innerHTML = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();


function Choix(form) {
	let carte_magasin_img = document.getElementById("carte_magasin_img");
	i = form.Rayon.selectedIndex;
	if (i == 0) {
	  return;
	}
	switch (i) {
		case 1 : var txt = new Array ('Vis','Serrure','Clou'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_quincaillerie.jpg";break;
		case 2 : var txt = new Array ('Insecticide','Diluant','Accessoires de ménages'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_droguerie.jpg";break;
		case 3 : var txt = new Array ('Prise','Fil électrique','Disjoncteur'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_electricite.jpg";break;
		case 4 : var txt = new Array ('Colle','Jonction','Tuyau'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_plomberie.jpg";break;
		case 5 : var txt = new Array ('Douche','Lavabo','Mirroir'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_sanitaire.jpg";break;
		case 6 : var txt = new Array ('Peinture matte','Pinceau','Rouleau'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_peinture.jpg";break;
		case 7 : var txt = new Array ('Lampe de Bureau','Abat-jour','Ampoule LED'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_luminaire.jpg";break;
		case 8 : var txt = new Array ('Marteau','Perçeuse','Caisse à outils'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_outillage.jpg";break;
		case 9 : var txt = new Array ('Tronçonneuse','Tondeuse','Sécateur'); 
			carte_magasin_img.src="../img/carte_magasin_img/carte_magasin_yah_jardin.jpg";break;
	}
	form.produit.selectedIndex=0;
	for (i=0;i<3;i++) {
	  form.produit.options[i+1].text=txt[i];
	  }
}

function Trouver_btn_aff(form) {
	let btn_recherche_liste = document.getElementById("btn_recherche_liste");
	j = form.produit.selectedIndex;
	let carte_magasin_img = document.getElementById("carte_magasin_img");
	i = form.Rayon.selectedIndex;
	if(j>0 && i==9){
		btn_recherche_liste.style = "visibility: visible;";
	}else{
		btn_recherche_liste.style = "visibility: hidden;";
	}
	

}



let btn_recherche_magasin = document.getElementById("btn_recherche_magasin");

btn_recherche_magasin.addEventListener("click", () => 
{	
	recherche_execute();
})

function recherche_execute(){
	let carte_magasin_img = document.getElementById("carte_magasin_img");
    //document.getElementById("recherche_magasin").placeholder="test";
    if (document.getElementById("recherche_magasin").value == "tronçonneuse") 
    {
        carte_magasin_img.src ="../img/carte_magasin_img/carte_magasin_yah_jardin.jpg";
    }

    else if (document.getElementById("recherche_magasin").value == "tondeuse") 
    {
        carte_magasin_img.src ="../img/carte_magasin_img/carte_magasin_yah_jardin.jpg";
    }

    else if (document.getElementById("recherche_magasin").value == "sécateur") 
    {
        carte_magasin_img.src ="../img/carte_magasin_img/carte_magasin_yah_jardin.jpg";
    }
    else
    {
    	alert("Nous n'avons pas cet article pour le moment");
    }
}

