export function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var openbtn = document.getElementsByClassName("openbtn")[0];
    var content = document.getElementsByClassName("content");

    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
      openbtn.style.marginLeft = "0";

      // Remove a classe para suavizar a transição
      for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("content-with-sidebar");
      }
    } else {
      sidenav.style.width = "250px";
      openbtn.style.marginLeft = "250px";

      // Adiciona a classe para suavizar a transição
      for (var i = 0; i < content.length; i++) {
        content[i].classList.add("content-with-sidebar");
      }
    }
  }