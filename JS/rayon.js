        // Mon code Javascript
        let rayonpict1 = document.getElementById("rayonpict1");
        let rayonpict2 = document.getElementById("rayonpict2");
        let btnRayon = document.getElementById("btnRayon");

        btnRayon.addEventListener("click", () => 
        {

            if (document.getElementById("rechercheRayon").value == "tronçonneuse") 
            {
                rayonpict1.src ="../img/rayon1_tronconneuse.png";
                rayonpict2.src ="../img/rayon2.png";
            }

            else if (document.getElementById("rechercheRayon").value == "tondeuse") 
            {
                rayonpict1.src ="../img/rayon1_tondeuse.png";
                rayonpict2.src ="../img/rayon2.png";
            }

            else if (document.getElementById("rechercheRayon").value == "sécateur") 
            {
                rayonpict2.src ="../img/rayon2_secateur.png";
                rayonpict1.src ="../img/rayon1.png";
            }
    
        })