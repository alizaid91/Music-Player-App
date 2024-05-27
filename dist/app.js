//accessing assets
const songs = [
  {
    name: "Bollywood Romance Essentials",
    image: "assets/songs_posters/song_1_poster.jpg",
  },
  {
    name: 'Apna Bana Le (From "Bhediya")',
    artist: "Arijit Singh & Sachin-Jigar",
    image: "assets/songs_posters/song_11_poster.jpg",
    songFile: "assets/songs_mp3_files/Apna_Bana_Le_Bhediya.mp3",
  },
  {
    name: 'Raataan Lambiyan (From "Shershaah")',
    artist: "Jubin Nautiyal, Tanishk Bagchi and Asees Kaur",
    image: "assets/songs_posters/song_1_poster.jpg",
    songFile: "assets/songs_mp3_files/Raataan_Lambiyan.mp3",
  },
  {
    name: "Pehle Bhi Main",
    artist: "Vishal Mishra",
    image: "assets/songs_posters/song_14_poster.jpg",
    songFile: "assets/songs_mp3_files/ANIMAL_PEHLE_BHI_MAIN.mp3",
  },
  {
    name: "O Mahi",
    artist: "Arijit Singh",
    image: "assets/songs_posters/song_16_poster.jpg",
    songFile: "assets/songs_mp3_files/O_Maahi.mp3",
  },
  {
    name: "Lut Gaye",
    artist: "Jubin Nautiyal",
    image: "assets/songs_posters/song_12_poster.jpg",
    songFile: "assets/songs_mp3_files/Lut_Gaye.mp3",
  },
  {
    name: "Khairiyat",
    artist: "Arijit Singh",
    image: "assets/songs_posters/song_13_poster.jpg",
    songFile: "assets/songs_mp3_files/KHAIRIYAT.mp3",
  },
  {
    name: "Maan Meri Jaan",
    artist: "King",
    image: "assets/songs_posters/song_2_poster.jpg",
    songFile: "assets/songs_mp3_files/Maan_Meri_Jaan.mp3",
  },
  {
    name: 'Kesariya (From "Brahmastra")',
    artist: "Arijit Singh",
    image: "assets/songs_posters/song_7_poster.jpg",
    songFile: "assets/songs_mp3_files/Kesariya.mp3",
  },
  {
    name: 'Tum Hi Aana (From "Marjaavaan")',
    artist: "Payal Dev & Jubin Nautiyal",
    image: "assets/songs_posters/song_8_poster.jpg",
    songFile: "assets/songs_mp3_files/Tum_Hi_Aana.mp3",
  },
  {
    name: "Srivalli",
    artist: "Javed Ali",
    image: "assets/songs_posters/song_9_poster.jpg",
    songFile: "assets/songs_mp3_files/Pushpa_ Srivalli.mp3",
  },
  {
    name: "Meri Jaan",
    artist: "Neeti Mohan & Sanjay Leela Bhansali",
    image: "assets/songs_posters/song_10_poster.jpg",
    songFile: "assets/songs_mp3_files/Meri_Jaan.mp3",
  },
  {
    name: "Maiyya Mainu",
    artist: "Sachet Tandon",
    image: "assets/songs_posters/song_4_poster.jpg",
    songFile: "assets/songs_mp3_files/Maiyya_Mainu.mp3",
  },
];

//accessing elements from html
const posterContainer = document.querySelector(".posterContainer");
const discription = document.querySelector(".discription");
const songsContainer = document.querySelector(".songsCotainer");
const minimizedControlls = document.querySelector(".minimized-song-controls");
const audioPlayer = document.querySelector("#audio-player");
let songList = document.querySelector("#song-list");
const maxiSongControl = document.querySelector(".maxzimised-song-controls");
const currentSongCuntrollDisc = document.querySelector(
  ".current-song-description"
);

//inserting playlist thumbnail and discription
posterContainer.innerHTML = `<img class="w-[250px] h-auto rounded-xl" src="assets/songs_posters/thumbnail.jpg" alt="image1">`;
discription.innerHTML = `<h1 class="text-white  text-xl font-extrabold pt-4">${songs[0].name}</h1>
<p class="text-slate-300 pt-3">Playlist • MeloTunes Music • 2024</p>
<p class="text-slate-300">12 songs • 1 hours, 1 minute</p>
<p class="text-slate-300 pt-3 px-5">Biggest hits to crowd favorites, enjoy the best of Bollywood Romance.</p> `;

//inserting songs
let playlistLength = songs.length - 1;
let songNum = 1;
for (let i = 0; i < playlistLength; i++) {
  songsContainer.innerHTML += `<li class=" cursor-pointer scroll-smooth h-full relative flex flex-row song-card"  data-song-id="${songNum}"><img class="w-[60px] h-[60px] rounded-md" src="${songs[songNum].image}">
  <div class="flex flex-col my-auto"><p class="text-white pl-5 font-semibold text-sm">${songs[songNum].name}</p>
  <p class="h-[20px] w-[200px] text-sm text-gray-300 pl-5 pr-7 truncate ...">${songs[songNum].artist}</p></div></li>`;
  songNum++;
}

//initail state of minimized music player
minimizedControlls.innerHTML = `<div class="scroll-smooth h-full relative flex flex-row song-card items-center">
<img class="w-[60px] h-[60px] rounded-md cursor-pointer" src="assets/songs_posters/initial_icon.avif">
<div class="flex flex-col my-auto cursor-pointer"><p class="text-white my-auto pl-3 font-semibold">No recently played music !</p>
</div>`;

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

//displaying or hiding maximized controls screen
window.hideMaxControl = function () {
  maxiSongControl.classList.add("translate-y-[100%]");
  setTimeout(() => {
    maxiSongControl.classList.add("hidden");
  }, 500);

  minimizedControlls.classList.remove("hidden");
  setTimeout(() => {
    minimizedControlls.classList.remove("translate-y-[120%]");
  }, 500);
  document.body.style.overflow = "scroll";
};

window.showMaxControlls = function () {
  maxiSongControl.classList.remove("hidden");
  setTimeout(() => {
    maxiSongControl.classList.remove("translate-y-[100%]");
  }, 100);

  minimizedControlls.classList.add("translate-y-[120%]");
  setTimeout(() => {
    minimizedControlls.classList.add("hidden");
  }, 100);

  document.body.style.overflow = "hidden";
};

//play Songs from playlist
songList.addEventListener("click", function (e) {
  const listItem = e.target.closest("li");
  const songId = listItem.dataset.songId;
  let index = parseInt(songId);
  const song = `${songs[index].songFile}`;

  //playing first song from playlist
  minimizedControlls.classList.add("translate-y-[120%]");
  playSongfromList();
  playSong(song);

  //playing next song from controls
  window.nextSong = function () {
    if (index < playlistLength) {
      index += 1;
      const song = `${songs[index].songFile}`;
      playSongfromList();
      playSong(song);
    }
  };

  //playing previous song from controls
  window.previousSong = function () {
    if (index > 1) {
      index -= 1;
      const song = `${songs[index].songFile}`;
      playSongfromList();
      playSong(song);
    }
  };

  audioPlayer.addEventListener("ended", nextSong);

  maxiSongControl.classList.remove("hidden");
  setTimeout(() => {
    maxiSongControl.classList.remove("translate-y-[100%]");
  }, 100);
  document.body.style.overflow = "hidden";

  function playSongfromList() {
    //maximized controls screen
    maxiSongControl.innerHTML = `
      <div class="w-full h-full flex flex-col justify-center items-center pb-4">
      <div class=" w-full text-center absolute top-3 animate-bounce">
      <i class="text-white text-2xl md:text-5xl mx-auto fa-solid fa-chevron-down cursor-pointer" onclick="hideMaxControl()"></i>
      </div>
      
      <div class="current-song-thumnail w-full mt-14 flex justify-center" data-song-id="${songId}"> <img class="rounded-xl w-[80%] md:max-w-[300px]" src="${songs[index].image}"></div>

      <div class="current-song-description  w-[80%] md:w-[300px] mt-3 pl-2 flex flex-col justify-centre">
      <p class="text-xl text-white font-extrabold">${songs[index].name}</p>
      <p class="h-[20px] w-[200px] text-sm text-gray-300 truncate ...">${songs[index].artist}</p>
      </div>

      <div class="w-full flex flex-col justify-centre items-center mt-5 mb-2">
      <div class="w-[75%] flex justify-center mb-2"><input type="range" value="0" class="w-full appearance-none h-[0.1rem] bg-gray-500 rounded-md md:w-[300px] md:mx-auto" id="progress"></div>
      <div class="w-[75%] md:w-[300px] flex justify-between px-1"><span class="text-white text-sm" id="currentTime"></span> <span class="text-white text-sm" id="totalTime"></span></div>
      </div>

      <div class="controls w-full mx-w-[300px] text-center flex items-center justify-center gap-7 relative">
      <div><i class="fa-solid fa-backward-step  text-white text-2xl cursor-pointer" onclick="previousSong()"></i></div>
      <div class="w-20 h-20 bg-white inline-flex items-center justify-center rounded-full cursor-pointer"><i class="pauseIcon2 fa-solid fa-pause text-black text-3xl" onclick="togglePlayPause()"></i></div>
      <div><i class="fa-solid fa-forward-step  text-white text-2xl cursor-pointer" onclick="nextSong()"></i></div>
      </div>
      </div>
      `;
    //minimized controll card
    minimizedControlls.innerHTML = `    
<div class="w-[20%]">
<img class="min-image w-[60px] h-[60px] rounded-md cursor-pointer" src="${songs[index].image}" onclick="showMaxControlls()">
</div>
<div class="w-[60%]">
<div class="flex flex-col cursor-pointer pl-3 rounded-sm" onclick="showMaxControlls()">
        <p class="text-white w-auto font-semibold text-[1rem] scrolling-text">
            <span class="scrolling-text-inner">${songs[index].name}</span>
        </p>
        <p class="text-sm text-gray-300 truncate ...">${songs[index].artist}</p>
    </div>
</div>
<div class="w-[20%] flex justify-center">
<i class="pauseIcon fa-solid fa-pause text-3xl text-white cursor-pointer" onclick="togglePlayPause()"></i>
</div>
`;

    //progress bar logic
    const progress = document.querySelector("#progress");
    isPlaying = true;
    if (isPlaying) {
      setInterval(() => {
        const songLength = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const Currentprogress = (currentTime / songLength) * 100; // Calculate the progress as a percentage
        progress.value = Currentprogress;
      }, 500);
    }

    //seek song forword and backword logic
    progress.addEventListener("input", function () {
      const currentTime = audioPlayer.duration * (progress.value / 100);
      audioPlayer.currentTime = currentTime;
    });

    //song current time and total time update logic
    audioPlayer.addEventListener("timeupdate", function () {
      const currentTime = Math.floor(audioPlayer.currentTime);
      const totalTime = Math.floor(audioPlayer.duration);

      // Convert seconds to minutes:seconds format
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      };
      document.getElementById("currentTime").textContent =
        formatTime(currentTime);
      document.getElementById("totalTime").textContent = formatTime(totalTime);
    });

    //adding the backgroud to currently playing song in playlist
    let listItems = songList.querySelectorAll("#song-list li");
    listItems.forEach((item) => item.classList.remove("song-playing"));
    let element = document.querySelectorAll("#song-list li")[index - 1];
    element.classList.add("song-playing");
  }
});
