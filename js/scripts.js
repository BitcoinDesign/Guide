function toggleSearch() {
  var x = document.getElementById("toggled-search");
  console.log(x.style.display);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
