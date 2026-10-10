const tracksData = [
  {
    num: "01",
    title: "A Sorrowful Reunion",
    artist: "Reality Club",
    link: "https://youtu.be/23wnnXK0xeE?si=BLJe8mbdbNJNIlEd/results?search_query=Judul+Lagu+Satu+Nama+Artis",
   // lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..."
  },
  {
    num: "02",
    title: "Am I Bothering You?",
    artist: "Reality Club",
    link: "https://youtu.be/F01WN9anzWo?si=eGJ8r5ssQC4HZVJ8results?search_query=Judul+Lagu+Dua+Nama+Artis",
   // lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..."
  },
  {
    num: "03",
    title: "Close to You",
    artist: "Reality Club",
    link: "https://youtu.be/--5LF0iqCkc?si=UhmNZRuHGDTXh43W/results?search_query=Judul+Lagu+Tiga+Nama+Artis",
    //lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..."
  },
  {
    num: "04",
    title: "Anything You Want",
    artist: "Reality Club",
    link: "https://youtu.be/FKijnRja8is?si=mytwJ7dpENTxwLRJ/results?search_query=Judul+Lagu+Empat+Nama+Artis",
   // lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..."
  },
  /* {
    num: "05",
    title: "Judul Lagu Lima",
    artist: "Nama Artis",
    link: "https://www.youtube.com/results?search_query=Judul+Lagu+Lima+Nama+Artis",
    lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..."
  },
  {
    num: "06",
    title: "Judul Lagu Enam",
    artist: "Nama Artis",
    link: "https://www.youtube.com/results?search_query=Judul+Lagu+Enam+Nama+Artis",
    lyric: "Baris lyric pertama...\nBaris lyric kedua...\nBaris lyric ketiga..." 
  } */
];

function initMusic() {
  const list = document.getElementById("musicList");
  const lyricBox = document.getElementById("lyricBox");
  const lyricTitle = document.getElementById("lyricTitle");
  const lyricText = document.getElementById("lyricText");
  const lyricClose = document.getElementById("lyricClose");

  if (!list) return;

  list.innerHTML = tracksData.map((t, i) => `
    <div class="track" data-index="${i}">
      <span class="track-num">${t.num}</span>
      <span class="track-title">${t.title}</span>
      <span class="track-artist">${t.artist}</span>
      <a class="track-link" href="${t.link}" target="_blank" rel="noopener" title="Buka lagu">↗</a>
    </div>
  `).join("");

  const tracks = list.querySelectorAll(".track");

  tracks.forEach(track => {
    track.addEventListener("click", (e) => {
      if (e.target.closest(".track-link")) return;

      tracks.forEach(t => t.classList.remove("active"));
      track.classList.add("active");

      const data = tracksData[track.dataset.index];
      if (typeof showToast === "function") {
        showToast("dipilih: " + data.title + " — " + data.artist);
      }

      if (lyricBox && lyricTitle && lyricText) {
        lyricTitle.textContent = data.title + " — " + data.artist;
        lyricText.textContent = data.lyric;
        lyricBox.classList.add("open");
      }
    });
  });

  if (lyricClose) {
    lyricClose.addEventListener("click", () => {
      lyricBox.classList.remove("open");
      tracks.forEach(t => t.classList.remove("active"));
    });
  }
}