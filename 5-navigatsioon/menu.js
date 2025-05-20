const menuToggleIcon = document.getElementById("menuToggle");
const nav = document.getElementById("mobileNav");

menuToggleIcon.onclick = () => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
      nav.style.display = "block";
  }
}