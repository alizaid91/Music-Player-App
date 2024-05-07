import songs from "../src/assets/assets.js";

console.log(songs[0].image);

// Assuming you have an <img> element with id "imageContainer" in your HTML
const posterContainer = document.querySelector(".posterContainer");
const discription = document.querySelector(".discription");
const songsContainer = document.querySelector(".songsCotainer");
posterContainer.innerHTML = `<img class="w-[250px] h-auto rounded-xl" src="${songs[0].image}" alt="image1">`;
discription.innerHTML = `<h1 class="text-white  text-xl font-extrabold pt-4">${songs[0].name}</h1>
<p class="text-slate-400 pt-3">Playlist • YouTube Music • 2024</p>
<p class="text-slate-400">11 songs • 1 hours, 1 minute</p>
<p class="text-slate-400 pt-3 px-5">Biggest hits to crowd favorites, enjoy the best of Bollywood Romance.</p>`;

let songNum = 1;
for (let i = 0; i < 10; i++) {
  songsContainer.innerHTML += `<div class="relative flex flex-row pt-3"><img class="w-[60px] h-auto rounded-sm" src="${songs[songNum].image}">
  <p class="text-white my-auto pl-5 pr-7 font-semibold">${songs[songNum].name}</p>
<i class="fa-solid fa-ellipsis-vertical text-white absolute right-5 top-1/2 transform -translate-y-1/2"></i></div>`;
  songNum++;
}
