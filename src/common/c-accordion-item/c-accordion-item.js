const buttons = document.querySelectorAll('.js-accordion-button');

for(const button of buttons) {
    button.addEventListener('click', function accordionButtonClickHandler(event) {
        const item = this.closest('.c-accordion-item');
        if(!item) return;

        item.classList.toggle('c-accordion-item--is-active');
    });
}