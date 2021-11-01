function animate({timing, draw, duration}) {
    const start = performance.now();

    requestAnimationFrame(function animateFrame(time) {
        const timePassed = time - start;
        const timeFraction = timePassed / duration;

        const progress = timing(timeFraction);
        draw(progress);

        if(timeFraction < 1) {
            requestAnimationFrame(animateFrame);
        }
    });
}