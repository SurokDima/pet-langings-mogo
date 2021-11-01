

const button = document.querySelector('.js-header__button');


button.addEventListener('click', function headerButtonClickHandler(event) {
    const header = event.target.closest('.c-header');
    if(!header) throw new Error("Button isn't in header");

    const nav = header.querySelector('.c-header__nav');
    if(!nav) throw new Error("Header doesn't have no nav");
    
    nav.classList.toggle('c-header__nav--is-active');
});


// I assume that there are manu 'scroll' links on page
const scrollLinks = document.querySelectorAll('.js-scroll');


for (const link of scrollLinks) {
    link.addEventListener('click', function scrollLinkClickHandler(event) {
        event.preventDefault();

        const targetPointer = this.dataset.scrollTo;
        const target = document.querySelector(`[data-scroll-target=${targetPointer}]`);

        if(!target) return;

        const pageY = target.getBoundingClientRect().top + window.scrollY;
        const windowPageY = window.scrollY;

        const heightBetweenObjects = pageY - windowPageY;
        animate({
            duration: 300,
            timing: time => time,
            draw: progress => window.scrollTo(0, windowPageY + progress * heightBetweenObjects)
        });
    });
}

const header = document.querySelector('.js-header');


const menuTarget = document.querySelector(`[data-menu-target=${header.dataset.target}`);



document.addEventListener('scroll', function documentScrollHandler(event) {
    if(!menuTarget) return;

    const menuTargetPos = menuTarget.getBoundingClientRect().top;
    const headerPos = header.getBoundingClientRect().bottom;


    if(menuTargetPos <= 0) header.classList.add('c-header--fixed');
    else header.classList.remove('c-header--fixed');

});
