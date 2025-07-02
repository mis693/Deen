// Dua Database
const duas = {
  dua1: {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...",
    urdu: "Aye hamare Rab! Humein duniya mein bhalai ata farma..."
  },
  dua2: {
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ...",
    urdu: "Aye Allah! Logon ke Rab, takleef ko door kar de..."
  },
  dua3: {
    arabic: "اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ...",
    urdu: "Aye Allah! Mujhe apne halal rizq se haram se bacha le..."
  },
  dua4: {
    arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    urdu: "Aye mere Rab! Mujhe salih logon mein se nikah ata farma."
  },
  dua5: {
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ...",
    urdu: "Tere siwa koi mabood nahi, tu paak hai..."
  }
};

// Form Submission
document.getElementById('duaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  generateLink();
});

// Generate Link & Show Dua
function generateLink() {
  const name = document.getElementById('nameInput').value.trim();
  const duaId = document.getElementById('duaSelect').value;

  if (!name) {
    alert("Kripya apna naam likhein");
    return;
  }

  const dua = duas[duaId];

  // Update animation area with Arabic + Urdu + User Name
  const animation = document.getElementById('duaAnimation');
  animation.classList.remove('hidden');
  animation.innerHTML = `
    <div class="arabic">${dua.arabic}</div>
    <div class="urdu">${dua.urdu}</div>
    <div class="urdu"><strong>${name}</strong> ke naam se – <em>Zeenat ka ek ruhani tohfa 💌</em></div>
  `;

  // Generate personalized link
  const link = `https://muhram-dua-share.vercel.app/dua.html?name=${encodeURIComponent(name)}&dua=${duaId}`;

  // Show link section
  const linkSection = document.getElementById('linkSection');
  linkSection.classList.remove('hidden');
  document.getElementById('generatedLink').value = link;

  linkSection.scrollIntoView({ behavior: 'smooth' });
}

// Copy Link
function copyLink() {
  const linkInput = document.getElementById('generatedLink');
  linkInput.select();
  document.execCommand('copy');
  alert("Link copy ho gaya! Ab aap paste kar sakte hain.");
}

// Share Buttons
function shareOnWhatsApp() {
  const link = document.getElementById('generatedLink').value;
  window.open(`https://wa.me/?text=${encodeURIComponent("Zeenat ka ek dua tohfa aapke liye: " + link)}`, '_blank');
}

function shareOnFacebook() {
  const link = document.getElementById('generatedLink').value;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
}

function shareOnInstagram() {
  alert("Instagram par link share karne ke liye link ko manually bio ya story me paste karein.");
}

function shareOnSnapchat() {
  alert("Snapchat par sharing ke liye aap is link ko copy karke story me paste karein.");
}
