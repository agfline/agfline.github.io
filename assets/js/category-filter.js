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
  $( window ).on( 'hashchange', function( e ) {
    console.log( 'hash changed' );
  });
}, false);

window.onpopstate = function() {
  console.log("onpopstate");
  filterCategory(window.location.hash.slice(1));
}

document.addEventListener('hashchange', function() {
  console.log("hashchange");
  filterCategory(window.location.hash.slice(1));
}, false);
