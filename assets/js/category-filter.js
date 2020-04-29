document.addEventListener('DOMContentLoaded', function() {
    var catRequest = window.location.hash.slice(1);

    if ( !catRequest )
      return;

    // Each categorized group of posts is in a section.
    // No other section in document.
    var sections = document.querySelectorAll("section");
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id != catRequest)
        sections[i].style.display = "none";
    }

    }, false);
}, false);
