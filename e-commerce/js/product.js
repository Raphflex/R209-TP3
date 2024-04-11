// À vous de jouer !
const API_URL = 'https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs';



const queryString = window.location.search;
console.log("Query string:", queryString); // Débogage
const urlParams = new URLSearchParams(queryString);
const albumId = urlParams.get('id');
console.log("Album ID:", albumId); // Débogage

// Fonction pour afficher les détails de l'album
const displayAlbumDetails = (album) => {
  console.log("Album details:", album); // Débogage
  const titleElement = document.getElementById('title');
  const coverElement = document.getElementById('cover');
  const artistElement = document.getElementById('artist');
  const yearElement = document.getElementById('year');
  const priceElement = document.getElementById('price');

  titleElement.textContent = album.title;
  coverElement.innerHTML = `<img src="${album.cover_url}" alt="Pochette de l'album ${album.title}">`;
  artistElement.textContent = album.artist;
  yearElement.textContent = album.year;
  priceElement.textContent = album.price;
};

// Fonction pour récupérer les détails de l'album depuis l'API
const fetchAlbumDetails = async () => {
  try {
    const response = await fetch(`${API_URL}/${albumId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const album = await response.json();
    displayAlbumDetails(album);
  } catch (error) {
    console.error('Error fetching album details:', error);
  }
};

// On lance la récupération des détails de l'album
fetchAlbumDetails();

