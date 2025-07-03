// script.js

// Random Dua generator for index.html
const duas = [
  "May Allah ease your hardships and grant you peace.",
  "Ya Allah, bless this soul with guidance and mercy.",
  "Rabbi zidni ilma – O Lord, increase me in knowledge.",
  "May your heart find peace in Allah's remembrance.",
  "May Allah forgive your sins and raise your rank in Jannah."
];

function generateDua() {
  const random = Math.floor(Math.random() * duas.length);
  const duaBox = document.getElementById("generated-dua");
  if (duaBox) {
    duaBox.innerText = `“${duas[random]}”`;
  }
}

// Music toggle logic
function toggleMusic() {
  const audio = document.getElementById("bg-music") || document.getElementById("karbala-music");
  if (audio) {
    audio.paused ? audio.play() : audio.pause();
  }
}

// Auto-display dua from query string (used in dua.html view mode)
document.addEventListener("DOMContentLoaded", () => {
  const query = new URLSearchParams(window.location.search);
  if (query.has('from') && query.has('to') && query.has('msg')) {
    const text = `"${query.get('msg')}" — from ${query.get('from')} to ${query.get('to')}`;
    document.body.innerHTML = `
      <div class='min-h-screen flex items-center justify-center text-center px-6 bg-black text-white'>
        <div>
          <h1 class='text-2xl font-semibold text-green-400 mb-4'>🌙 A Dua Just for You</h1>
          <p class='text-lg italic text-green-200'>${text}</p>
          <a href="dua.html" class="block mt-6 text-blue-400 underline">✨ Send Another</a>
        </div>
      </div>
    `;
  }
});
