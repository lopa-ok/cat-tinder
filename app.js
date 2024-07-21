const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
const randomUserApiUrl = 'https://randomuser.me/api/';
const baconIpsumApiUrl = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text';

async function fetchCatImage() {
    try {
        const response = await fetch(catApiUrl);
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

async function fetchRandomName() {
    try {
        const response = await fetch(randomUserApiUrl);
        const data = await response.json();
        return data.results[0].name.first;
    } catch (error) {
        console.error('Error fetching random name:', error);
    }
}

async function fetchRandomBio() {
    try {
        const response = await fetch(baconIpsumApiUrl);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching random bio:', error);
    }
}

async function fetchCatProfile() {
    const [image, name, bio] = await Promise.all([fetchCatImage(), fetchRandomName(), fetchRandomBio()]);
    return {
        name: name,
        image: image,
        bio: bio
    };
}

async function loadProfile() {
    const profile = await fetchCatProfile();
    document.getElementById('cat-name').textContent = profile.name;
    document.getElementById('cat-image').src = profile.image;
    document.getElementById('cat-bio').textContent = profile.bio;
}

document.getElementById('like-btn').addEventListener('click', () => {
    loadProfile();
});

document.getElementById('dislike-btn').addEventListener('click', () => {
    loadProfile();
});

// Load the first profile on page load
loadProfile();
