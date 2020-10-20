var language =
{
	fr: {
		a:"Bonjour !",
		b:"La disposition du rayon",
		c:"Trouver LE meilleur produit",
		d:"Carte du magasin"

	},
	en: {
		a: "Hello ! Do you want...",
		b: "Rayon's disposal",
		c: "To find THE best product",
		d: "Mall's map"

	}
};

if (window.location.hash)
{
	if (window.location.hash === "#en")
	{
		message.textContent = language.en.a;
		carte_rayon.textContent = language.en.b;
		detail_produit.textContent = language.en.c;
		carte_magasin.textContent = language.en.d;
	}
}