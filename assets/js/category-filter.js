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


document.addEventListener('DOMContentLoaded', function(e) {
  console.log("DOMContentLoaded");
  //filterCategory(window.location.hash.slice(1));
  
  window.addEventListener('popstate', function(e){
    console.log("onpopstate2");
    return e;
  }, true);

  window.addEventListener('locationchange', function(e) {
    console.log("locationchange");
    //filterCategory(window.location.hash.slice(1));
    return e;
  }, false);
  
  return e;
}, false);
