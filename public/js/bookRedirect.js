function redirectToBookPage(bookId) {
  console.log(bookId);
  window.location.href = `/book/` + bookId;
}
