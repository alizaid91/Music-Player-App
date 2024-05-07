import songs from "../src/assets/assets.js";

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
