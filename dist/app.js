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
const maxiSongControl = document.querySelector(".maxzimised-song-controls")
const currentSongCuntrollDisc = document.querySelector(".current-song-description")

//inserting playlist thumbnail and discription
posterContainer.innerHTML = `<img class="w-[250px] h-auto rounded-xl" src="${songs[0].image}" alt="image1">`;
discription.innerHTML = `<h1 class="text-white  text-xl font-extrabold pt-4">${songs[0].name}</h1>
<p class="text-slate-400 pt-3">Playlist • YouTube Music • 2024</p>
<p class="text-slate-400">11 songs • 1 hours, 1 minute</p>
<p class="text-slate-400 pt-3 px-5">Biggest hits to crowd favorites, enjoy the best of Bollywood Romance.</p> `;

//inserting songs
let songNum = 1;
for (let i = 0; i < 11; i++) {
  songsContainer.innerHTML += `<li class=" cursor-pointer scroll-smooth h-full relative flex flex-row song-card"  data-song-id="${songNum}"><img class="w-[60px] mx-h-[60px] h-auto rounded-sm" src="${songs[songNum].image}">
  <div class="flex flex-col my-auto"><p class="text-white pl-5 pr-3 font-semibold">${songs[songNum].name}</p>
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
  const pauseIcon2 = document.querySelector(".pauseIcon2");
  if (isPlaying) {
    audioPlayer.pause();
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
    pauseIcon2.classList.remove("fa-pause");
    pauseIcon2.classList.add("fa-play");
    isPlaying = false;
  } else {
    audioPlayer.play();
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
    pauseIcon2.classList.remove("fa-play");
    pauseIcon2.classList.add("fa-pause");
    isPlaying = true;
  }

};

window.hideMaxControl = function () {
    // const maxiSongControl = document.querySelector(".maxzimised-song-controls")
    maxiSongControl.style.display = "none";
    document.body.style.position = "static"
}

window.showMaxControlls = function () {
  document.body.style.position = "fixed"
  maxiSongControl.style.display = "block";
}

//play Songs
songList.addEventListener("click", function (e) {
  let listItem = e.target.closest("li");
  if (listItem) {
    const songId = listItem.dataset.songId;
    let index = parseInt(songId);
    const song = `${songs[index].songFile}`;
    if (song) {
      if (minimizedControlls.children.length > 0) {
        maxiSongControl.style.display = "block"

        minimizedControlls.style.display = "block";
        document.body.style.position = "fixed"
        maxiSongControl.innerHTML = `
        <div class="current-song-thumnail w-full mx-auto mt-14 flex justify-center data-song-id="${songId}""> <img class="rounded-xl w-[80%] md:max-w-[300px]" src="${songs[index].image}"></div>
        <div class="current-song-description w-[80%] flex justify-centre items-center mx-auto  mt-3">
        <div class="flex flex-col my-auto ml-2"><p class="text-xl text-white font-semibold">${songs[index].name}</p>
        <p class="h-[20px] w-[200px] text-sm text-gray-400 truncate ...">${songs[index].artist}</p></div>
        </div>
        <div class="controls w-full text-center mt-3 flex items-center justify-center gap-12">
        <i class="fa-solid fa-backward-step  text-white text-[2.5rem]"></i>
        <i class="pauseIcon2 fa-solid fa-pause text-white text-7xl" onclick="togglePlayPause()"></i>
        <i class="fa-solid fa-forward-step  text-white text-[2.5rem]" onclick="nextSong()"></i>
        </div>
        <i class="text-gray-400 text-xl fa-solid fa-chevron-down absolute top-3 left-3" onclick="hideMaxControl()"></i>
        `

        minimizedControlls.innerHTML = `<div class="scroll-smooth h-full relative flex flex-row song-card">
            <img class="w-[60px] mx-h-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}" onclick="showMaxControlls()">
            <div class="flex flex-col my-auto" onclick="showMaxControlls()"><p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
            <p class="h-[20px] w-[200px] text-sm text-gray-400 pl-5 pr-7 truncate ...">${songs[index].artist}</p></div>
            <i class=" pauseIcon fa-solid fa-pause absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl text-white " onclick="togglePlayPause()"></i>
        </div>`;
      } else {
        maxiSongControl.style.display = "block";
        document.body.style.position = "fixed"
        minimizedControlls.style.display = "block";
        maxiSongControl.innerHTML = `
        <div class="current-song-thumnail w-full mx-auto mt-14 flex justify-center data-song-id="${songId}""> <img class="rounded-xl w-[80%] md:max-w-[300px]" src="${songs[index].image}"></div>
        <div class="current-song-description w-[80%] flex justify-centre items-center mx-auto  mt-3">
        <div class="flex flex-col my-auto ml-2"><p class="text-xl text-white font-semibold">${songs[index].name}</p>
        <p class="h-[20px] w-[200px] text-sm text-gray-400 truncate ...">${songs[index].artist}</p></div>
        </div>
        <div class="controls w-full text-center mt-3 flex items-center justify-center gap-12">
        <i class="fa-solid fa-backward-step  text-white text-[2.5rem]"></i>
        <i class="pauseIcon2 fa-solid fa-pause text-white text-7xl" onclick="togglePlayPause()"></i>
        <i class="fa-solid fa-forward-step  text-white text-[2.5rem]" onclick="nextSong()"></i>
        </div>
        <i class="text-gray-400 text-xl fa-solid fa-chevron-down absolute top-3 left-3" onclick="hideMaxControl()"></i>
        `

        minimizedControlls.innerHTML += `<div class="scroll-smooth h-full relative flex flex-row song-card" data-song-id="${songId}">
            <img class="w-[60px] mx-h-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}" onclick="showMaxControlls()">
            <div class="flex flex-col my-auto" onclick="showMaxControlls()"><p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
            <p class="h-[20px] w-[200px] text-sm text-gray-400 pl-5 pr-7 truncate ...">${songs[index].artist}</p></div>
            <i class="pauseIcon fa-solid fa-pause absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl text-white"  onclick="togglePlayPause()"></i>
        </div>`;
      }
      playSong(song);
      let listItems = songList.querySelectorAll("li");
      listItems.forEach((item) => item.classList.remove("song-playing"));
      listItem.classList.add("song-playing");
    }
  }
});
