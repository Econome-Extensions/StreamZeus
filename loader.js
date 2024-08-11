document.addEventListener('DOMContentLoaded', () => {
    applySettings();
});

function applySettings() {
    // Apply Background Image
    const backgroundImageURL = localStorage.getItem('backgroundImageURL') || '';
    if (backgroundImageURL) {
        document.body.style.backgroundImage = `url(${backgroundImageURL})`;
        document.body.style.backgroundSize = 'cover'; // Ensure the image covers the entire background
        document.body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating
        document.body.style.backgroundPosition = 'center'; // Center the background image
    }

    // Apply Theme
    const theme = localStorage.getItem('theme') || 'theme-dark';
    document.body.className = theme;

    // Apply Auto-Play Setting
    const autoPlay = localStorage.getItem('autoPlay') === 'true';
    // Apply auto-play setting wherever needed in your app
    // For example, you might initialize a video player with this setting

    // Apply Stats Page Setting
    const statsPage = localStorage.getItem('statsPage') === 'true';
    if (statsPage) {
        // Show or configure stats page link or settings
        // Example: document.querySelector('#statsPageLink').style.display = 'block';
    }

    // Apply View Details Enabled Setting
    const viewDetailsEnabled = localStorage.getItem('viewDetailsEnabled') === 'true';
    // Apply this setting in your app as needed
    // For example: document.querySelector('#viewDetailsButton').style.display = viewDetailsEnabled ? 'inline-block' : 'none';
}

// Optional: Toggle Theme Functionality
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('theme-dark') ? 'theme-dark' :
                         document.body.classList.contains('theme-light') ? 'theme-light' : 'theme-blue';
    const newTheme = currentTheme === 'theme-dark' ? 'theme-light' :
                     currentTheme === 'theme-light' ? 'theme-blue' : 'theme-dark';
    document.body.classList.replace(currentTheme, newTheme);
    localStorage.setItem('theme', newTheme);
});
