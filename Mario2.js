function piso(nPiso, altura){ 
    // To do. Deben poner el numero
    // correcto de espacios y de # de acuerdo
    // al nPiso y a la altura.
    let texto ="<p>"
    //añadir un espacio al texto nEspacios veces
    for (let i=0; i<nEspacios; i++)
    {
        texto = texto +"&nbsp"
    }
    // añadir # al texto nNumeral veces
    for (let i=0; i <nNumeral;i++)
    {
        texto= texto+"#"
    }
    texto=texto + "</p>"
    return texto
    }
    let nPisos;
    do{
    //lo que se hace : recibir el número
    //del usuario y guardarlo como número
    nPisos = Number(prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
    }while(isNaN(nPisos) || nPisos <=0 ||  nPisos> 10);// La condición para que se repita
    let contenido = "";
    for(let i = 1; i< nPisos; i ++){ 
        contenido = contenido + piso(i, nPisos)
    }
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = contenido;