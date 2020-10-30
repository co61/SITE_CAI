location.hash = "#fr";

const langE1 = document.querySelector('#conteneur_vert2');
var langwarp = document.querySelector('#conteneur_vert2');
const link = langwarp.querySelectorAll('a');
const messageE1 = document.querySelector('#message');
const carte_rayonE1 = document.querySelector('#carte_rayon');
const detail_produitE1 = document.querySelector('#detail_produit');
const carte_magasinE1 = document.querySelector('#carte_magasin');

link.forEach(el => {
	el.addEventListener('click', () => {
		langE1.querySelector('.active').classList.remove('active');
		el.classList.add('active');

		const attr = el.getAttribute('language');

		messageE1.textContent = data[attr].message;
		carte_rayonE1.textContent = data[attr].carte_rayon;
		detail_produitE1.textContent = data[attr].detail_produit;
		carte_magasinE1.textContent = data[attr].carte_magasin;
	});
});

var data = {
			"français":
			{
				"message": "Bonjour ! Désirez-vous...",
				"carte_rayon": "La disposition du rayon",
				"detail_produit": "Trouver LE meilleur produit",
				"carte_magasin": "Carte du Magasin"
			},
			"english":
			{
				"message": "Hello ! Do you want...",
				"carte_rayon": "Rayon's disposal",
				"detail_produit": "To find THE best product",
				"carte_magasin": "Mall's map"
			}
}

function doSomething(){
	if (location.hash === "#fr") {
		alert("Préparez-vous ! Un conseiller arrive !");
	}
	if (location.hash === "#en") {
		alert("Attention ! A salesman is on his way !");
	}
}