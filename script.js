aboutBtn = document.getElementById('about-btn');
const aboutPopup = document.getElementById('about-popup');
contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
donateBtn = document.getElementById('donate-btn');
const donatePopup = document.getElementById('donate-popup');
const closeAboutBtn = document.getElementById('close-about-popup');
const closeContactBtn = document.getElementById('close-contact-popup');
const closeDonateBtn = document.getElementById('close-donate-popup');
const linkedinBox = document.querySelector('.linkedin_box');
const githubBox = document.querySelector('.github_box');
const form = document.getElementById('custom-contact-form');
const successMessage = document.getElementById('successMessage');
const customDropdown = document.querySelector('.custom-dropdown');

aboutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    aboutPopup.classList.add('show');
});

contactBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contactPopup.classList.add('show');
});

donateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    donatePopup.classList.add('show');
});

closeAboutBtn.addEventListener('click', function() {
    aboutPopup.classList.remove('show');
});

closeContactBtn.addEventListener('click', function() {
	contactPopup.classList.remove('show');
	successMessage.style.color = '#1e2124'
});

closeDonateBtn.addEventListener('click', function() {
	donatePopup.classList.remove('show');
});

linkedinBox.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/muhammed-emin-ta%C5%9Fdelen-6846b2280/', '_blank');
});

githubBox.addEventListener('click', function() {
	window.open('https://github.com/Emintsdelen', '_blank');
});

window.addEventListener('click', function(event) {
    if (event.target === aboutPopup || event.target === contactPopup) {
        aboutPopup.classList.remove('show');
		contactPopup.classList.remove('show');
		successMessage.style.color = '#1e2124'
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
	successMessage.style.color = '#4CAF50'
	form.reset();
    this.blur();
});

customDropdown.addEventListener('change', function(event) {
	if (event.target.value == 'custom') {
		customDropdown.style.color = '#ffe23b';
		event.preventDefault();
		contactPopup.classList.add('show');
	}
	
	else {
		customDropdown.style.color = 'white';
	}
});