// adding event listener to the button
document.getElementById("submitbtn").addEventListener("click", function () {
  // checking if all the fields are filled
  if (
    document.getElementById("book-name").value !== "" ||
    document.getElementById("book-price").value !== "" ||
    document.getElementById("book-short-desc").value !== "" ||
    document.getElementById("book-long-desc").value !== "" ||
    document.getElementById("book-image").value !== ""
  ) {
    alert("book added");
    return;
  }
  alert("Please fill all the fields");
});
