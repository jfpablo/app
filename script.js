load();
function load()
{
cont.innerHTML = "chargement en cours";
  body.style.background = "#086cef";
    setTimeout(function(){
    loaded();
},5000);
}
function loaded()
{
cont.innerHTML = "AMT CARE CENTER";
  body.style.background = "white";
  document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('cont');
  document.body.insertBefore(newDiv, currentDiv);
}
}
