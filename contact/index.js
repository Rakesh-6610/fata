// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)









let count = 1;
function nav_open() {
    let icon1 = document.getElementById('icon1');
    let icon2 = document.getElementById('icon2');
    let nav = document.querySelector(".mobile_nav")

    icon1.style.display = "none";
    icon2.style.display = "flex";
    nav.style.transform = "scaleY(1)";
}

function nav_close() {
    let icon1 = document.getElementById('icon1');
    let icon2 = document.getElementById('icon2');
    let nav = document.querySelector(".mobile_nav")

    icon1.style.display = "flex";
    icon2.style.display = "none";
    nav.style.transform = "scaleY(0)";
}

function events() {
    let n = document.querySelector('.nav_dropdown_mobile');
    if (count%2 == 0) {
        n.style.display = 'none';
    }
    else {
        n.style.display = 'block';
    }
    count+=1;

}



gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('.fline').forEach(fline => {
    gsap.fromTo(fline, {
        width : 0
    }, {
        width : "75%",
        duration : 1,
        scrollTrigger : fline
    })
})