document.getElementById("heading").innerHTML =
  localStorage["title"]|| "Just Write"; 
  setInterval(function() {
    localStorage["title"] = document.getElementById("heading").innerHTML;
  }, 1000);