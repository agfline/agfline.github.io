function filterCategory( catRequest )
{
  if ( !catRequest )
    return;

  // Each categorized group of posts is in a section.
  // No other section in document.
  var sections = document.querySelectorAll("section");
  
  for (var i = 0; i < sections.length; i++)
  {
    if (sections[i].id == catRequest)
      sections[i].style.display = "block";
    else
      sections[i].style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded");
  filterCategory(window.location.hash.slice(1));
}, false);

window.onpopstate = function() {
  console.log("onpopstate");
  //filterCategory(window.location.hash.slice(1));
}

window.addEventListener('popstate', function(e){
    console.log("onpopstate2");
}, true);

document.addEventListener('hashchange', function() {
  console.log("hashchange");
  //filterCategory(window.location.hash.slice(1));
}, true);
