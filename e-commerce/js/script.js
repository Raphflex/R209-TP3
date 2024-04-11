const API_URL = 'https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs';

// Fonction pour afficher les albums
const displayAlbums = (albums) => {
  const itemsElement = document.getElementById('items');
  itemsElement.innerHTML = '';

  albums.forEach((album) => {
    // Si l'id de l'album est différent de 7, on l'affiche
    if (album.id !== '7') {
      const albumElement = document.createElement('a');
      albumElement.href = `./product.html?id=${album.id}`;

      const articleElement = document.createElement('article');

      const imgElement = document.createElement('img');
      imgElement.src = album.cover_url;
      imgElement.alt = `Pochette de l'album ${album.title}`;

      const h3Element = document.createElement('h3');
      h3Element.textContent = album.title;

      const pElement = document.createElement('p');
      pElement.textContent = album.artist;

      articleElement.appendChild(imgElement);
      articleElement.appendChild(h3Element);
      articleElement.appendChild(pElement);

      albumElement.appendChild(articleElement);

      itemsElement.appendChild(albumElement);
    }
  });
};

// Fonction pour récupérer les albums depuis l'API
const fetchAlbums = async () => {
  const response = await fetch(API_URL);
  const albums = await response.json();

  // On trie les albums par ordre alphabétique
  albums.sort((a, b) => a.titl.localeCompare(b.title));

  displayAlbums(albums);
};

// On lance la récupération des albums
fetchAlbums();