function redirectToDua(event) {
  event.preventDefault();
  const name = document.getElementById('receiverName').value.trim();

  if (!name) {
    alert("Naam likhna zaroori hai!");
    return;
  }

  window.location.href = `dua.html?name=${encodeURIComponent(name)}`;
}
