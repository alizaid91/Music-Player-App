//accessing assets
const songs = [
  {
    name: "Bollywood Romance Essentials",
    image: "assets/song_1_poster.jpg",
  },
  {
    name: 'Raataan Lambiyan (From "Shershaah")',
    artist: "Jubin Nautiyal, Tanishk Bagchi and Asees Kaur",
    duration: "3:30",
    image: "assets/song_1_poster.jpg",
    songFile: "assets/Raataan_Lambiyan.mp3",
  },
  {
    name: "Maan Meri Jaan",
    artist: "King",
    duration: "4:00",
    image: "assets/song_2_poster.jpg",
    songFile: "assets/Maan_Meri_Jaan.mp3",
  },
  {
    name: "Manike",
    artist: "Yohani,Jubin Nautiyal & Surya Ragunaathan",
    duration: "3:45",
    image: "assets/song_3_poster.jpg",
    songFile: "assets/Manike.mp3",
  },
  {
    name: 'Apna Bana Le (From "Bhediya")',
    artist: "Arijit Singh & Sachin-Jigar",
    duration: "4:10",
    image: "assets/song_11_poster.jpg",
    songFile: "assets/Apna_Bana_Le_Bhediya.mp3",
  },
  {
    name: 'Ranjha (From "Shershaah")',
    artist: "Jasleen Royal,B Praak,Romy & Anvita Dutt",
    duration: "3:20",
    image: "assets/song_5_poster.jpg",
    songFile: "assets/Ranjha.mp3",
  },
  {
    name: 'Ghodey Pe Sawaar (From "Qala")',
    artist: "Amit Trivedi,Amitabh Bhattacharya & Sireesha Bhagavatula",
    duration: "4:30",
    image: "assets/song_6_poster.jpg",
    songFile: "assets/Ghodey_Pe_Sawaar.mp3",
  },
  {
    name: 'Kesariya (From "Brahmastra")',
    artist: "Arijit Singh",
    duration: "3:10",
    image: "assets/song_7_poster.jpg",
    songFile: "assets/Kesariya.mp3",
  },
  {
    name: 'Tum Hi Aana (From "Marjaavaan")',
    artist: "Payal Dev & Jubin Nautiyal",
    duration: "4:20",
    image: "assets/song_8_poster.jpg",
    songFile: "assets/Tum_Hi_Aana.mp3",
  },
  {
    name: "Srivalli",
    artist: "Javed Ali",
    duration: "3:55",
    image: "assets/song_9_poster.jpg",
    songFile: "assets/Srivalli.mp3",
  },
  {
    name: "Meri Jaan",
    artist: "Neeti Mohan & Sanjay Leela Bhansali",
    duration: "4:10",
    image: "assets/song_10_poster.jpg",
    songFile: "assets/Meri_Jaan.mp3",
  },
  {
    name: "Maiyya Mainu",
    artist: "Sachet Tandon",
    duration: "5:15",
    image: "assets/song_4_poster.jpg",
    songFile: "assets/Maiyya_Mainu.mp3",
  },
];

//accessing elements from html
const posterContainer = document.querySelector(".posterContainer");
const discription = document.querySelector(".discription");
const songsContainer = document.querySelector(".songsCotainer");
const minimizedControlls = document.querySelector(".minimized-song-controls");
const audioPlayer = document.querySelector("#audio-player");
let songList = document.querySelector("#song-list");

//inserting playlist thumbnail and discription
posterContainer.innerHTML = `<img class="w-[250px] h-auto rounded-xl" src="${songs[0].image}" alt="image1">`;
discription.innerHTML = `<h1 class="text-white  text-xl font-extrabold pt-4">${songs[0].name}</h1>
<p class="text-slate-400 pt-3">Playlist • YouTube Music • 2024</p>
<p class="text-slate-400">11 songs • 1 hours, 1 minute</p>
<p class="text-slate-400 pt-3 px-5">Biggest hits to crowd favorites, enjoy the best of Bollywood Romance.</p> `;

//inserting songs
let songNum = 1;
for (let i = 0; i < 11; i++) {
  songsContainer.innerHTML += `<li class=" scroll-smooth h-full relative flex flex-row song-card"  data-song-id="${songNum}"><img class="w-[60px] h-auto rounded-sm" src="${songs[songNum].image}">
  <div class="flex flex-col my-auto"><p class="text-white pl-5 pr-7 font-semibold">${songs[songNum].name}</p>
  <p class="h-[20px] w-[200px] text-sm text-gray-400 pl-5 pr-7 truncate ...">${songs[songNum].artist}</p></div></li>
`;
  songNum++;
}

//play and pause feature
let isPlaying = false;
function playSong(songSrc) {
  audioPlayer.src = songSrc;
  audioPlayer.play();
  isPlaying = true;
}

window.togglePlayPause = function () {
  const pauseIcon = document.querySelector(".pauseIcon");
  if (isPlaying) {
    audioPlayer.pause();
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
    isPlaying = false;
  } else {
    audioPlayer.play();
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
    isPlaying = true;
  }
};

//play Songs
songList.addEventListener("click", function (e) {
  const listItem = e.target.closest("li");
  if (listItem) {
    const songId = listItem.dataset.songId;
    const index = parseInt(songId);
    const song = `${songs[index].songFile}`;
    if (song) {
      if (minimizedControlls.children.length > 0) {
        minimizedControlls.style.display = "block";
        minimizedControlls.innerHTML = `<div class="scroll-smooth h-full relative flex flex-row song-card" data-song-id="${songId}">
            <img class="w-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}">
            <div class="flex flex-col my-auto"><p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
            <p class="h-[20px] w-[200px] text-sm text-gray-400 pl-5 pr-7 truncate ...">${songs[index].artist}</p></div>
            <i class="pauseIcon fa-solid fa-pause absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-white " onclick="togglePlayPause()"></i>
        </div>`;
      } else {
        minimizedControlls.style.display = "block";
        minimizedControlls.innerHTML += `<div class="scroll-smooth h-full relative flex flex-row song-card" data-song-id="${songId}">
            <img class="w-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}">
            <div class="flex flex-col my-auto"><p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
            <p class="h-[20px] w-[200px] text-sm text-gray-400 pl-5 pr-7 truncate ...">${songs[index].artist}</p></div>
            <i class="pauseIcon fa-solid fa-pause absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-white"  onclick="togglePlayPause()"></i>
        </div>`;
      }
      playSong(song);
      const listItems = songList.querySelectorAll("li");
      listItems.forEach((item) => item.classList.remove("song-playing"));
      listItem.classList.add("song-playing");
    }
  }
});
