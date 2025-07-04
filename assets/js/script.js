// script.js

function generateLink() {
  const from = encodeURIComponent("Zeenat");
  const to = encodeURIComponent("My Dear Friend");
  const msg = encodeURIComponent(""); // Empty = auto dua in gift.html

  // Use fixed domain instead of window.location.origin
  const url = `https://your-vercel-project.vercel.app/gift.html?from=${from}&to=${to}&msg=${msg}`;
  
  const linkInput = document.getElementById('share-link');
  const box = document.getElementById('link-box');
  const wa = document.getElementById('wa-link');
  const fb = document.getElementById('fb-link');

  linkInput.value = url;
  box.classList.remove('hidden');

  wa.href = `https://wa.me/?text=✨ A Ruhani Dua Gift for you 🌙\\n${url}`;
  fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

function copyLink() {
  const linkInput = document.getElementById('share-link');
  navigator.clipboard.writeText(linkInput.value).then(() => {
    alert("Link copied! Send it with love 💖");
  });
}
