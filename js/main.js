// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme switcher
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// JavaScript untuk mengganti gambar berdasarkan tema
document.addEventListener('DOMContentLoaded', () => {
    const profilImg = document.getElementById('profilKlien');
    const theme = document.body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        profilImg.src = 'Asset/profil-contact2.png';
    } else {
        profilImg.src = 'Asset/profil-contact.jpg';
    }
});

// Menambahkan event listener untuk perubahan tema
document.querySelector('.theme-switch input').addEventListener('change', (event) => {
    const profilImg = document.getElementById('profilKlien');
    const theme = event.target.checked ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', theme);
    profilImg.src = theme === 'dark' ? 'Asset/profil-contact2.png' : 'Asset/profil-contact.jpg';
});