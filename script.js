
var tl = gsap.timeline()
tl.from(".line h1",{
    y : 100,
    opacity: 0,
    delay : 0.2,
    duration :1,
    stagger:0.5,
});

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){     
        var h5timer = document.querySelector("#line1-part1 h5");
        var load = 0;
        setInterval(function(){
            if (load<100){
                h5timer.innerHTML = load++;
            }
            else{
                h5timer.innerHTML = load;
            }
        },20)
    }
});

tl.from(".line h2",{
    delay:2,
    opacity:0,
})
tl.to("#loader",{
    opacity:0 ,
    duration:0.3,
    delay:3,
});

tl.from("#page1" , {
    delay : 0.2,
    y:1400,
    opacity :0,
    duration:0.5,
    ease : Power4
})
tl.to("#loader",{
    display:"none",
})