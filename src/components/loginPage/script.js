export function flip() {
  var backContent = document.getElementById("card-content-back");
  var frontContent = document.getElementById("card-content-front");
  var backDisplayStyle = window
    .getComputedStyle(backContent)
    .getPropertyValue("display");
  if (backDisplayStyle === "none") {
    backContent.style.display = "block";
    frontContent.style.display = "none";
  } else {
    frontContent.style.display = "block";
    backContent.style.display = "none";
  }
  var card = document.querySelector(".card");
  card.style.transform =
    card.style.transform === "rotateY(360deg)"
      ? "rotateY(0)"
      : "rotateY(360deg)";
  console.log("flip() called");
}

export function SeePassword() {
  var show = document.getElementById("user-password");
  if (show.type == "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
