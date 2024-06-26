// ==== NAV MENU TOGGLE ==== //
const navMenu = document.getElementById('nav_menu');
const toggleBtn = document.getElementById('toggle_btn');
const closeBtn = document.getElementById('close_btn');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// ==== ANIMATE ON SCROLL INIT ==== //
AOS.init();

// ==== GSAP ANIMATION ==== //
gsap.from(".main-heading", { duration: 1, y: 30, opacity: 0, ease: "power3.inOut" });
gsap.from(".info-text", { duration: 1, y: 30, opacity: 0, delay: 0.3, ease: "power3.inOut" });
gsap.from(".btn_wrapper", { duration: 1, y: 30, opacity: 0, delay: 0.5, ease: "power3.inOut" });
gsap.from(".team_img_wrapper img", { duration: 1.2, y: 30, opacity: 0, delay: 0.8, ease: "power3.inOut" });
