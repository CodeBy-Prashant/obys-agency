function loadingAnimation(){
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
    delay:1.5,
    opacity:0,
})
tl.to("#loader",{
    opacity:0 ,
    duration:1,
    delay:0.1,
});

tl.from("#page1" , {
    delay : 0.2,
    y:8,
    opacity :0,
    duration:1,
    ease:Power4,
})
tl.to("#loader",{
    display:"none",
})

tl.from(".hero h1 , #hero3 h2",{
    y:120,
    duration:0.3,
    stagger:0.2,
})

};
function cursorAnimation(){
    
document.addEventListener("mousemove" , function(dets){
    gsap.to("#crsr" ,{
      left:dets.x,
      top:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4" , {
    //Parameters are optional.
    
  });
};
loadingAnimation();
cursorAnimation();