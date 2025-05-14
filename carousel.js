var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
document.querySelector(".swiper-pagination").style.left = "-27px";

const Navbar = document.querySelector(".desktopNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("active-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("active-nav");
    }
  }
});

const MobNavbar = document.querySelector(".mobileNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (MobNavbar) {
      MobNavbar.classList.add("active-nav2");
    }
  } else {
    if (MobNavbar) {
      MobNavbar.classList.remove("active-nav2");
    }
  }
});
