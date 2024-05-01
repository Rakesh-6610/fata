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


gsap.fromTo(".hero_text", {
    x : "-100%",
    skewX : "30px"
}, {
    x : 0,
    skewX : 0,
    duration : 1

})

gsap.fromTo(".hero_img", {
    y : "-50px",
    opacity : 0.4
}, {
    y : 0,
    opacity : 1,
    duration : 1
})


gsap.fromTo(".line_heading", {
    width : 0
}, {
    width : "100%",
    duration : 1,
    delay : 1
})

gsap.fromTo('.line', {
    width:0
}, {
    width: "280px",
    duration : 1,
    scrollTrigger : ".line"
})

gsap.fromTo('.sline', {
    width:0
}, {
    width: "100%",
    duration : 1,
    delay : 1,
    scrollTrigger : ".sline"
})

gsap.utils.toArray(".ani_dpt").forEach(ani_dpt => {
    gsap.fromTo(ani_dpt, {
        y : "60px",
        opacity : 0
    }, {
        y : 0,
        opacity : 1,
        duration : 1,
        scrollTrigger : ani_dpt
    })
})

gsap.fromTo('.simg', {
    scale : 0.9
}, {
    scale : 1,
    duration : 1,
    scrollTrigger : '.simg'
})

gsap.fromTo('.sdis', {
    y : "70px",
    // skewY : "10px",
    opacity : 0.3
}, {
    y :0,
    opacity :1,
    // skewY : 0,
    duration : 1,
    scrollTrigger : ".sdis"
})


gsap.utils.toArray(".wjoin").forEach(wjoin => {
    gsap.fromTo(wjoin, {
        x : "-100%",
        opacity : 0.2
    }, {
        x : 0,
        opacity : 1,
        duration : 1,
        scrollTrigger : wjoin
    })
})

gsap.utils.toArray('.fline').forEach(fline => {
    gsap.fromTo(fline, {
        width : 0
    }, {
        width : "75%",
        duration : 1,
        scrollTrigger : fline
    })
})