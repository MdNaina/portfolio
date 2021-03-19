const showMenu = (toggleId, navId) =>{
    nav = document.getElementById(navId)
    toggle = document.getElementById(toggleId)

    if(nav&&toggle){
        toggle.addEventListener("click",() =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function activeLink(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu button
    let menu = document.getElementById('nav-menu')
    menu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', activeLink))

// Scroll Animation
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2000,
    reset: true
})

// Scroll Home 
sr.reveal(`.home__title, .button, .home__img, .home__social-icon, .about__text, .about__subtitle, .about__img, .skills__subtitle, .skills__text, .skills__img, .skills__data, .work__img, .contact__form`,{
    interval: 200
})
