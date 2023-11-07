
// unsplash API
const count = 10;
const apiKey = 'JCrOvcH0Pc8R9e2ktCSwWJanAr_KaX_6dTOC3t6OWlU';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get fotos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On load

getPhotos();