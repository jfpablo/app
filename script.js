 document.onreadystatechange = function() 
  {
    if (document.readyState != "complete") 
    {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#chargement").style.visibility = "visible";
    } 
    else 
    {
      document.querySelector("#chargement").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };
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
}
