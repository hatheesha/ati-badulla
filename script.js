const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

function showSection(sectionId) {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  let selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

showSection('home');
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

showSlides();
const showFormButton = document.getElementById('show-form');
const showFeesButton = document.getElementById('show-fees');
const registrationForm = document.getElementById('registration-form');
const registrationFees = document.getElementById('registration-fees');

showFormButton.addEventListener('click', () => {
    registrationForm.style.display = 'block';
    registrationFees.style.display = 'none';
});

showFeesButton.addEventListener('click', () => {
    registrationFees.style.display = 'block';
    registrationForm.style.display = 'none';
});