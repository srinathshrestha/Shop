function toggleDropdown() {
  console.log("toggleDropdown called..");

  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}

function redirectToBookPage(bookId) {
  // Redirect to the specific book page using the bookId
  window.location.href = "/book/" + bookId;
}
