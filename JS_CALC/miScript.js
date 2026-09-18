function recomendar(genero) {
    let elementoEdad = document.getElementById("ingresarEdad").value;
    let elementoPelicula = document.getElementById("mostrarPelicula");
    
    switch(genero){
        case 'comedia' :
            if (elementoEdad < 13 ) {
                elementoPelicula.textContent = "Son como ninos";
            } else  {
                if (elementoEdad < 16) {
                    elementoPelicula.textContent = "Supercool";
                } else {
                    elementoPelicula.textContent = "Proyecto X";
                } 
            }
            break;
        case 'drama' :
            if (elementoEdad < 13) {
                elementoPelicula.textContent = "Titanic";
            }else {
                if (elementoEdad < 16) {
                    elementoPelicula.textContent = "Diario de una pasion";
                } else {
                    elementoPelicula.textContent = "Cleopatra vol.3"
                }
            }
            break;
        case 'musical' :
            if (elementoEdad < 13){
                elementoPelicula.textContent = "Highschool musical";
            } else if (elementoEdad < 16) {
                elementoPelicula.textContent = "Mama mia";
            } else {
                elementoPelicula.textContent = "Los miserables";
            } 
            break; 
        case 'crimen' :
            if (elementoEdad < 13) {
                elementoPelicula.textContent = "Pareja explosiva";
            } else if (elementoEdad < 16) {
                elementoPelicula.textContent = "Crimen padre amado";
            } else {
                elementoPelicula.textContent = "Amanecer rojo";
            }
            break;
    }
}