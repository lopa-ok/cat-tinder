const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
const randomUserApiUrl = 'https://randomuser.me/api/';

const bios = [
    'Loves to cuddle and play with yarn.',
    'Enjoys long naps in the sun.',
    'A curious explorer.',
    'Loves chasing laser pointers.',
    'Prefers quiet and cozy spots.',
    'An energetic bundle of joy.',
    'Loves climbing trees.',
    'A friendly and social cat.',
    'Always up for an adventure.',
    'A little shy but very affectionate.'
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

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

async function fetchCatProfile() {
    const [image, name] = await Promise.all([fetchCatImage(), fetchRandomName()]);
    const bio = getRandomElement(bios);
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
