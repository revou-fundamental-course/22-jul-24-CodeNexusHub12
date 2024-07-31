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

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^(.*@(gmail\.com|.*\.id))$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block'; 
        return false; 
    } else {
        emailError.style.display = 'none'; 
        return true; 
    }
}

function validateForm() {
    const inputs = document.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    if (!validateEmail()) {
        isValid = false;
    }

    return isValid;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active'); 
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const loading = document.getElementById('loading');
    const successMessage = document.getElementById('successMessage');
    const homeSection = document.getElementById('home');

    loading.style.display = 'block'; 
    successMessage.style.display = 'none'; 

    setTimeout(() => {
        loading.style.display = 'none'; 
        
        
        homeSection.style.display = 'none';
        successMessage.style.display = 'block'; 
    }, 2000); // Tampilkan selama 2 detik
});

document.getElementById('backButton').addEventListener('click', function() {
    const successMessage = document.getElementById('successMessage');
    const homeSection = document.getElementById('home');

    successMessage.style.display = 'none'; 
    homeSection.style.display = 'block'; 

    document.querySelector('form').reset();
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,3000);
  
}

changeSlide();
