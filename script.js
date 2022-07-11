setTimeout(function(){
    load();
},2000);
function load()
{
cont.innerHTML = "chargement en cours";
  body.style.background = "#086cef";
}
setTimeout(function(){
    loaded();
},6000);
function loaded()
{
cont.innerHTML = "AMT CARE CENTER";
  body.style.background = "white";
}
