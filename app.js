const profiles = [
    {
        name: 'Fluffy',
        image: 'cat1.jpg',
        bio: 'Loves to cuddle and play with yarn.'
    },
    {
        name: 'Whiskers',
        image: 'cat2.jpg',
        bio: 'Enjoys long naps in the sun.'
    },
    {
        name: 'Shadow',
        image: 'cat3.jpg',
        bio: 'A curious explorer.'
    }
];

let currentProfileIndex = 0;

function loadProfile(index) {
    const profile = profiles[index];
    document.getElementById('cat-name').textContent = profile.name;
    document.getElementById('cat-image').src = profile.image;
    document.getElementById('cat-bio').textContent = profile.bio;
}

document.getElementById('like-btn').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    loadProfile(currentProfileIndex);
});

document.getElementById('dislike-btn').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    loadProfile(currentProfileIndex);
});

loadProfile(currentProfileIndex);
