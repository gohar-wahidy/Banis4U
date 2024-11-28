document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
  
    navbarLinks.forEach(function(link){
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetUrl = event.target.href;
        const content = document.querySelector(".content");
        const footer = document.querySelector("footer");
        content.classList.add("page-exit");
        footer.classList.add("page-exit");
        setTimeout(function(){
          window.location.href = targetUrl;
        }, 750);
      });
    });
  });  