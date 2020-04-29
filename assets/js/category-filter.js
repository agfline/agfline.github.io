function filterCategory( catRequest ) {
  if ( !catRequest )
    return;

  // Each categorized group of posts is in a section.
  // No other section in document.
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id == catRequest)
      sections[i].style.display = "block";
    else
      sections[i].style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  filterCategory(window.location.hash.slice(1));
  console.log(window);
}, false);

document.addEventListener('hashchange', function() {
  console.log("hashchange");
  filterCategory(window.location.hash.slice(1));
}, false);
