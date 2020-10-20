var dataReload = document.querySelectorAll("[data-reload]");

var language =
{
	fr:
	{},
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

/*for (i = 0; i <= dataReload.length; i++)
{
	dataReload[i].onclick = function()
	{
		location.reload(true);
	};
}*/