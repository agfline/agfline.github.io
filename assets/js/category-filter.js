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

document.addEventListener('DOMContentLoaded', function(e) {
  console.log("DOMContentLoaded");
  filterCategory(window.location.hash.slice(1));
  return e;
}, false);

window.addEventListener('popstate', function(e){
  console.log("onpopstate2");
  return e;
}, true);

window.addEventListener('hashchange', function(e) {
  console.log("hashchange");
  //filterCategory(window.location.hash.slice(1));
  return e;
}, true);
