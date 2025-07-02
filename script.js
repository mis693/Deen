const duas = {
  dua1: {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    urdu: "Aye hamare Rab! Humein duniya mein bhalai aur akhirat mein bhalai de.",
    roman: "Aye Rab! Duniya aur aakhirat ki bhalai de, aur dozakh se bacha."
  },
  dua2: {
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ، أَنْتَ الشَّافِي",
    urdu: "Aye Allah! Takleef door kar, shifa de, tu hi shifa dene wala hai.",
    roman: "Aye Allah! Takleef door kar de, tu hi Shafi hai."
  },
  dua3: {
    arabic: "اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ",
    urdu: "Halal se humein kafi karde aur haram se bacha le.",
    roman: "Aye Allah! Halal se rozi de, haram se door rakh."
  },
  dua4: {
    arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    urdu: "Mujhe nek rishta ata farma.",
    roman: "Aye Rab! Mujhe nek saathi ata farma."
  },
  dua5: {
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ",
    urdu: "Main gunehgar hoon, tu paak hai, maafi de.",
    roman: "Tere siwa koi nahi, tu paak hai. Maafi de."
  },
  dua6: {
    arabic: "اللّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ وَالخَيْرَ",
    urdu: "Mujhe sehat aur khair de.",
    roman: "Aye Allah! Khairiyat aur sehat de."
  }
};

document.getElementById('duaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const duaId = document.getElementById('duaSelect').value;
  if (!name || !duaId) {
    alert("Naam aur dua zaroor chunein.");
    return;
  }

  const dua = duas[duaId];
  document.getElementById('duaAnimation').classList.remove('hidden');
  document.querySelector('.arabic').textContent = dua.arabic;
  document.querySelector('.urdu').textContent = dua.urdu;

  const romanToggle = document.getElementById('romanToggle');
  const romanText = document.getElementById('romanText');
  if (romanToggle.checked) {
    romanText.textContent = dua.roman;
    romanText.classList.remove('hidden');
  } else {
    romanText.classList.add('hidden');
  }

  const link = `https://muhram-dua.vercel.app/?name=${encodeURIComponent(name)}&dua=${duaId}`;
  document.getElementById('generatedLink').value = link;
  document.getElementById('linkSection').classList.remove('hidden');
  alert("Dua ready! Dil se Ameen kehna mat bhoolna 🤲");
});

function copyLink() {
  const linkInput = document.getElementById('generatedLink');
  linkInput.select();
  document.execCommand('copy');
  alert("Link copy ho gaya! Ab aap paste kar sakte hain.");
}

function shareOnWhatsApp() {
  const link = document.getElementById('generatedLink').value;
  window.open(`https://wa.me/?text=${encodeURIComponent("Ye dua aapke liye hai 🤲: " + link)}`, '_blank');
}

function shareOnFacebook() {
  const link = document.getElementById('generatedLink').value;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
}

function donate() {
  alert("Shukriya! Aapka donation zarooratmand bachon ke liye bahut kaam aayega.");
}
