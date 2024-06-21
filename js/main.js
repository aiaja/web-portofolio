const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

// SHOW MENU
ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

//HIDE MENU
CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});

AOS.init();

//LOGO
gsap.from(".logo",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

//NAV MENU
gsap.from(".nav_menu_list .nav_menu_item",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
    stagger:0.3,
})

//TOGGLE BUTTON
gsap.from(".toggle_btn",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

//MAIN HEADING
gsap.from(".main-heading",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.5,
})

//BUTTON
gsap.from(".btn_wrapper",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".card",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".info-text",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".fasilitas",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

// TENTANG KAMI
gsap.from(".tentang",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})
gsap.from(".card-tentang",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

//PROJECT
gsap.from(".project",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".pengalaman",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

// KONTAK
gsap.from(".kontak",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})



window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.header');
    if (window.pageYOffset >= 30) {
        nav.classList.add("shadow-header")
    }else{
        nav.classList.remove("shadow-header")
    }
})

