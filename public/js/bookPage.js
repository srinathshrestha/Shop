document.getElementById("copyButton").addEventListener("click", function () {
  var bookLink = document.getElementById("bookLink");
  bookLink.select();
  document.execCommand("copy");
  alert("Link copied!");
});
