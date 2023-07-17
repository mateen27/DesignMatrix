const tl = gsap.timeline();

//targetting the nav section
tl.from('#nav' , {
    opacity : 0 , 
    delay : 0.5
})

tl.from('#nav h1 , #nav h4 , #nav h3' , {
    y : -80 ,
    opacity : 0 , 
    duration : 0.8 ,
    stagger : 0.3
})

// targetting the left side heading
tl.from('#left h1' , {
    x : -500 , 
    opacity : 0 , 
    duration : 0.5 ,
    stagger : 0.5 , 
    delay : .2
});

// targetting the image
tl.from("#right img" , {
    scale : 2 , 
    opacity : 0 , 
    duration : 0.5
})


// targetting the cards
gsap.from('#page2 .box' , {
    duration : 1 , 
    scale : 0 , 
    opacity : 0 , 
    stagger : 0.3 , 
    scrollTrigger : {
        trigger : "#page2 .box" , 
        scroller : "body" , 
        // markers : true , 
        start : "top 70%"
    }
})