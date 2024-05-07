// import songs from "./assets/assets.js";

// // Create an array to store imported images
// const importedImages = {};

// // Import images dynamically
// for (let i = 1; i <= 1) {
//     const imageName = `song_${i}_poster`;
//     const imagePath = `./${imageName}.jpg`; // Adjust the file extension if needed
//     importedImages[imageName] = require(imagePath);
// }

// // Now you can access the imported images using their names
// console.log(importedImages);

// assets.js
const songs = [
  {
      name :'Bollywood Romance Essentials',
      image: ('assets/song_1_poster.jpg')
  },
  {
      name: 'Raataan Lambiyan (From "Shershaah")',
      artist: 'Artist 1',
      duration: '3:30',
      image: ('assets/song_1_poster.jpg'),
      songFile : ('assets/Raataan_Lambiyan.mp3')
  },
  {
      name: 'Maan Meri Jaan',
      artist: 'Artist 2',
      duration: '4:00',
      image: ('assets/song_2_poster.jpg'),
      songFile : ('assets/Maan_Meri_Jaan.mp3')
  },
  {
      name: 'Manike',
      artist: 'Artist 3',
      duration: '3:45',
      image: 'assets/song_3_poster.jpg',
      songFile : ('assets/Manike.mp3')
  },
  {
      name: 'Maiyya Mainu',
      artist: 'Artist 4',
      duration: '5:15',
      image: 'assets/song_4_poster.jpg',
      songFile : ('assets/Maiyya_Mainu.mp3')
  },
  {
      name: 'Ranjha (From "Shershaah")',
      artist: 'Artist 5',
      duration: '3:20',
      image: 'assets/song_5_poster.jpg',
      songFile : ('assets/Ranjha.mp3')
  },
  {
      name: 'Ghodey Pe Sawaar (From "Qala")',
      artist: 'Artist 6',
      duration: '4:30',
      image: 'assets/song_6_poster.jpg',
      songFile : ('assets/Ghodey_Pe_Sawaar.mp3')
  },
  {
      name: 'Kesariya (From "Brahmastra")',
      artist: 'Artist 7',
      duration: '3:10',
      image: 'assets/song_7_poster.jpg',
      songFile : ('assets/Kesariya.mp3')
  },
  {
      name: 'Tum Hi Aana (From "Marjaavaan")',
      artist: 'Artist 8',
      duration: '4:20',
      image: 'assets/song_8_poster.jpg',
      songFile : ('assets/Tum_Hi_Aana.mp3')
  },
  {
      name: 'Srivalli',
      artist: 'Srivalli',
      duration: '3:55',
      image: 'assets/song_9_poster.jpg',
      songFile : ('assets/Srivalli.mp3')
  },
  {
      name: 'Meri Jaan',
      artist: 'Artist 10',
      duration: '4:10',
      image: 'assets/song_10_poster.jpg',
      songFile : ('assets/Meri_Jaan.mp3')
  }
];

// export default songs;

console.log(songs[0].image);

const posterContainer = document.querySelector(".posterContainer");
const discription = document.querySelector(".discription");
const songsContainer = document.querySelector(".songsCotainer");
const minimizedControlls = document.querySelector(".minimized-song-controls");

posterContainer.innerHTML = `<img class="w-[250px] h-auto rounded-xl" src="${songs[0].image}" alt="image1">`;
discription.innerHTML = `<h1 class="text-white  text-xl font-extrabold pt-4">${songs[0].name}</h1>
<p class="text-slate-400 pt-3">Playlist • YouTube Music • 2024</p>
<p class="text-slate-400">11 songs • 1 hours, 1 minute</p>
<p class="text-slate-400 pt-3 px-5">Biggest hits to crowd favorites, enjoy the best of Bollywood Romance.</p> `;

let songNum = 1;
for (let i = 0; i < 10; i++) {
  songsContainer.innerHTML += `<li class=" scroll-smooth h-full relative flex flex-row song-card"  data-song-id="${songNum}"><img class="w-[60px] h-auto rounded-sm" src="${songs[songNum].image}">
  <p class="text-white my-auto pl-5 pr-7 font-semibold">${songs[songNum].name}</p>
<i class="fa-solid fa-ellipsis-vertical text-white absolute right-5 top-1/2 transform -translate-y-1/2"></i></li>`;
  songNum++;
}

let songList = document.querySelector("#song-list");
const audioPlayer = document.querySelector("#audio-player");

let isPlaying = false

function playSong(songSrc) {
  audioPlayer.src = songSrc;
  audioPlayer.play();
  isPlaying = true
}

  window.togglePlayPause = function() {
    console.log("working");
    const pauseIcon = document.querySelector(".pauseIcon")
    if(isPlaying){
      audioPlayer.pause();
      pauseIcon.classList.remove('fa-pause')
      pauseIcon.classList.add('fa-play')
      isPlaying = false;
    }
    
    else{
      audioPlayer.play()
      pauseIcon.classList.remove('fa-play')
      pauseIcon.classList.add('fa-pause')
      isPlaying = true
    }
}

songList.addEventListener("click", function (e) {
  const listItem = e.target.closest("li");
  if (listItem) {
    const songId = listItem.dataset.songId;
    console.log(songId);
    const index = parseInt(songId);
    console.log(index);
    const song = `${songs[index].songFile}`;
    console.log(song);
    if (song) {
      if (minimizedControlls.children.length > 0) {
        minimizedControlls.style.display= "block"
        // Replace minimized controls with current song details
        minimizedControlls.innerHTML = `<div class="scroll-smooth h-full relative flex flex-row song-card" data-song-id="${songId}">
            <img class="w-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}">
            <p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
            <i class="pauseIcon fa-solid fa-pause absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-white" onclick="togglePlayPause()"></i>
        </div>`;
      } else {
        // Append new content to minimizedControlls
        minimizedControlls.style.display= "block"
        minimizedControlls.innerHTML += `<div class="scroll-smooth h-full relative flex flex-row song-card" data-song-id="${songId}">
            <img class="w-[60px] h-auto rounded-sm ml-3" src="${songs[index].image}">
            <p class="text-white my-auto pl-5 pr-10 font-semibold">${songs[index].name}</p>
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
