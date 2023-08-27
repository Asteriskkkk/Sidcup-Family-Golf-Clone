var crsr = document.querySelector('#cursor')
var crsrblur = document.querySelector('#cursor-blur')

document.addEventListener("mousemove", function(dets){
    crsr.style.left =  dets.x -10+ "px"
    crsr.style.top = dets.y -10+ "px"
})

document.addEventListener("mousemove", function(dets){
    crsrblur.style.left =  dets.x -200 + "px" 
    crsrblur.style.top = dets.y -200 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
console.log(h4all)
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4,
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 0
        crsr.style.border = "0px solid #94ab4e"
        crsr.style.backgroundColor = "#94ab4e"
    })
})

gsap.to("#nav",{
    duration: 0.5,
    height: 95,
    backgroundColor: '#000',
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
})

gsap.from("#aboutus img, #aboutusin",{
    y: 50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller: "body",
        start: "top 75%",
        end: "top 100%",
        scrub:5
    }
})

gsap.from(".card",{
    y: 50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller: "body",
        start: "top 30%",
        end: "top 50%",
        scrub:5
    }
})

gsap.from("#col1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        marker: true,
        start: "top 55%",
        end : "top 45%",
        scrub:3,
    }
})

gsap.from("#col2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        marker: true,
        start: "top 55%",
        end : "top 45%",
        scrub:3,
    }
})

gsap.from("#page4 h3",{
    y:80,
    scrollTrigger:{
        trigger:"#page4 h3",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:1
    }
})