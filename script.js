var principal = document.getElementById('melisa')
var etiquetah1 = document.createElement('h1')

//verificacion del codigo//
console.log(h1)

//informacion de la etiqueta//
etiquetah1.innerHTML = "mel"
melisa.appendChild(etiquetah1);

document.body.onload = addElement;

function addElement() {
    var newDiv =
        document.createElement("div");
    var newContent = document.createTextNode("Holaaa");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

}