var tl = gsap.timeline(
    {
        scrollTrigger : {
            trigger : '#main' , 
            start : '75% 50%' , 
            end : '100% 50%' , 
            scrub : 5 , //to perform animation again and again
            duration : 1 , 
            pin : true , 
        }
    }
);
tl.to(".img" , {
    width : '100vw' , 
    height : '100vh' , 
    duration : 3 ,
})