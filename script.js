function timeline_gsap() {
    var tl = gsap.timeline()


    tl.from('.text h1', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: .3

    }, 'a')

    tl.from('.nav img, .nav-text h1 ', {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: .2
    }, 'a')

    tl.from('.black', {
        y: -900,
        duration: 1
    })

    tl.from('#food-bar', {
        rotate: 90,
        scale:.5,
        opacity: 0,
        duration: 1
    })

    tl.from('.black h1', {
        y: 100,
        opacity: 0

    })


    tl.from('.page1-text h1, .page1-text button', {
        x: -700,
        opacity: 0,
        duration: 1
    })

    tl.to('.page1-text h1,  .page1-text button', {
        x: -20,

        duration: .5
    })

    tl.to('.page1-text p', {
        opacity: 1,
        x: -18
    })


    tl.from('.price-tag', {
        y: 200,
        opacity: 0,
        // delay:.3,
        duration: 1.3,
        stagger: .2,
        backgroundColor: 'red'
    }, 'a')
}
timeline_gsap();




