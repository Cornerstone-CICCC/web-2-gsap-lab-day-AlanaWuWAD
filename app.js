gsap.registerPlugin(ScrollTrigger);

const section1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.tontent',
        tart:'top top',
        pin:true,
        onEnterBack: () => section1.restart(),
    }
})
section1
.from('.content h1 span:first-child',{x:'-100vw',duration:1})
.from('.content h1 span:last-child',{x:'100vw',duration:1})
.from('.content p',{opacity:0,rotation:90,transformOrigin:"left top",duration:1})
.from('.content img',{y:'100vh',duration:1})

const section2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        start:'top top',
        pin:true,
        scrub:true,
        // markers:true
    }
})
section2
.from('.section2 h2 span:first-child',{y:'-100vh',duration:0.3})
.from('.section2 h2 span:last-child',{y:'-100vh',duration:0.3})
.from('.section2 p',{scale:0,opacity:0,duration:1})

//set initial status
gsap.set('.section3 span', {
    backgroundColor: 'white',
    color: 'black'
});
const section3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.horizontal-sections',
        start:'top top',
        pin:true,
        scrub:true,
        // markers:true
    }
})
section3
.from('.section3 h2',{x:'-100vw',scale:10,duration:1})
.from('.section3 span',{y:'100vh',backgroundColor:'white',color:'black',stagger:0.3,duration:1})
.to('.section4',{x:'-100%',duration:1})
.from('.portfolio-item',{x:'100vw',duration:1,stagger:0.3},'<')

//add span in h2
const text = document.querySelector('.section5 h2');
const letter = text.textContent;
text.innerHTML = letter.split("").map(letter =>     `<span>${letter === " " ? "&nbsp;":letter}</span>`
).join("");


const section5 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section5',
        start:'top top',
        pin:true,
        scrub:true,
        // markers:true
    }
})
section5
.from('.section5 span',{y:'-100vh',stagger:0.1,duration:1})
.from('.section5 p',{y:'100vh',opacity:0,duration:1})
.from('.section5 button',{scale:0,opacity:0,duration:1})
.from('.section5',{backgroundPosition:"200% 90%",duration:1})
.to('.section5',{backgroundColor:'black',duration:1},'<')


