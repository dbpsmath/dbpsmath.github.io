window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.querySelector('input');
    const games = document.querySelectorAll('.image-gallery .image-container');

    input.addEventListener('input', () => {
        const searchTerm = input.value.toLowerCase();
        games.forEach(game => {
            const image = game.querySelector('img');
            if (image.alt.toLowerCase().includes(searchTerm)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    });
});
