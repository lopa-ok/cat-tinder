const apiUrl = 'https://api.thecatapi.com/v1/images/search';

async function fetchCatProfile() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const catProfile = {
            name: 'Random Cat', // Since the API doesn't provide a name, we use a placeholder still wip
            image: data[0].url,
            bio: 'A lovely cat looking for a match.' // Placeholder bio still wip
        };
        return catProfile;
    } catch (error) {
        console.error('Error fetching cat profile:', error);
    }
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
