// // Create an array to store imported images
// const importedImages = {};

// // Import images dynamically
// for (let i = 1; i <= 11; i++) {
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
        image: ('../src/assets/song_1_poster.jpg')
    },
    {
        name: 'Raataan Lambiyan (From "Shershaah")',
        artist: 'Artist 1',
        duration: '3:30',
        image: ('../src/assets/song_1_poster.jpg')
    },
    {
        name: 'Maan Meri Jaan',
        artist: 'Artist 2',
        duration: '4:00',
        image: ('../src/assets/song_2_poster.jpg')
    },
    {
        name: 'Manike',
        artist: 'Artist 3',
        duration: '3:45',
        image: '../src/assets/song_3_poster.jpg'
    },
    {
        name: 'Maiyya Mainu',
        artist: 'Artist 4',
        duration: '5:15',
        image: '../src/assets/song_4_poster.jpg'
    },
    {
        name: 'Ranjha (From "Shershaah")',
        artist: 'Artist 5',
        duration: '3:20',
        image: '../src/assets/song_5_poster.jpg'
    },
    {
        name: 'Ghodey Pe Sawaar (From "Qala")',
        artist: 'Artist 6',
        duration: '4:30',
        image: '../src/assets/song_6_poster.jpg'
    },
    {
        name: 'Kesariya (From "Brahmastra")',
        artist: 'Artist 7',
        duration: '3:10',
        image: '../src/assets/song_7_poster.jpg'
    },
    {
        name: 'Tum Hi Aana (From "Marjaavaan")',
        artist: 'Artist 8',
        duration: '4:20',
        image: '../src/assets/song_8_poster.jpg'
    },
    {
        name: 'Srivalli',
        artist: 'Srivalli',
        duration: '3:55',
        image: '../src/assets/song_9_poster.jpg'
    },
    {
        name: 'Meri Jaan',
        artist: 'Artist 10',
        duration: '4:10',
        image: '../src/assets/song_10_poster.jpg'
    }
];

export default songs;