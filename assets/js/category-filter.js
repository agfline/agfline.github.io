
function filterCategory( catRequest )
{
  if ( !catRequest )
    return;

  
  document.querySelector("#page-title").style.display = "none";
  document.querySelector(".taxonomy__index").style.display = "none";
  
  // Each categorized group of posts is in a section.
  // No other section in document.
  var sections = document.querySelectorAll("section");
  
  for (var i = 0; i < sections.length; i++)
  {

    if (sections[i].id == catRequest+"x") /* layout categories.html adds an 'x' to id, to avoid scroll down on anchor */
      sections[i].style.display = "block";
    else
      sections[i].style.display = "none";
    
    sections[i].querySelector("h1.archive__subtitle").classList.add("as-page-title-style");
  }
}


/* Quickest to call script in the end of layout */
//document.addEventListener('DOMContentLoaded', function(e) {
  filterCategory(window.location.hash.slice(1));  
//  return e;
//}, false);


/*
 * Only way to get notified on url change... thanks to jQuery plugins... 
 * https://stackoverflow.com/a/52809105
 */

history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener('locationchange', function(e) {
  console.log("locationchange");
  filterCategory(window.location.hash.slice(1));
  return e;
}, false);
