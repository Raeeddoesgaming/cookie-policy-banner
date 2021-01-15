function acceptPrivacy() {
  localStorage.privacy = "accepted";
  location.reload();
}

if (localStorage.privacy == "accepted") {
  document.querySelector(".cookie-container").hidden = true;
}
