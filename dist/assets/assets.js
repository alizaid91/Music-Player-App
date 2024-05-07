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

export default songs;