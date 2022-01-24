import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanillaaa!</h1>
// <i class="fas fa-fish"></i>
// <h2>Hello world</h2>
// `;

/**
 * Proxima:
 * - implementar previous
 * - colocar o nome da musica que ta tocando na tela
 * - estilizar os botões
 * - adiantar ou voltar 10s
 * - aleatorio
 * - mudo e volume
 * - colocar play e pause no mesmo botão
 * - stop (musica voltar ao inicio)
 */
const play = document.getElementById("play");

const pause = document.getElementById("pause");
const next = document.getElementById("next");

const audioFile = document.getElementById("audioFile");

let isPlaying = false;
let tracks = [
  {
    id: 1,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/62703a9f451706550c8cf7191ec57fc2.mp3"
  },
  {
    id: 2,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/8d594c11c34340e26b720d0375ed32c3.mp3"
  },
  {
    id: 3,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/d09cdc3d82a87eee89f96f6f155999ab.mp3"
  },
  {
    id: 4,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/0a0671b17d60a0bcabc58a96f797ee29.mp3"
  },
  {
    id: 5,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/f4d36c5b24c2bf333064d98adcd21f2d.mp3"
  },
  {
    id: 6,
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/87a9cb5b5e1646f76521592b4ee5867e.mp3"
  }
];

let currentTrackIndex = 0;

const onPlay = () => {
  console.log("play");
  isPlaying = true;
  const src = tracks[currentTrackIndex];
  audioFile.src = src.url;
  audioFile.play();
};

const onPause = () => {
  isPlaying = false;
  console.log("pause");
  audioFile.pause();
};

const onNext = () => {
  console.log("next");

  const next = currentTrackIndex === tracks.length ? 0 : currentTrackIndex + 1;
  currentTrackIndex = next;

  if (isPlaying) {
    onPlay();
  }
  // if (currentTrack === tracks.length)
  // const nextTrack = currentTrack === tracks.length :
};

play.addEventListener("click", onPlay);

pause.addEventListener("click", onPause);

next.addEventListener("click", onNext);
