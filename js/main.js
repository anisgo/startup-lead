document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    otherItem.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle the content visibility
            item.classList.toggle('active');
            content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : '0';

            // Toggle the rotation of the icon
            icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const navbarCollapse = document.querySelector('.navbar_collapse');
    let isOpen = window.innerWidth >= 992; // Check if window width is 992px or above initially

    const updateNavbarCollapse = () => {
        if (window.innerWidth >= 992) {
            isOpen = true;
            navbarCollapse.classList.add('show');
            const height = navbarCollapse.scrollHeight;
            navbarCollapse.style.maxHeight = `${height}px`;
        } else {
            console.log('asfsafds');
            isOpen = false;
            navbarCollapse.classList.remove('show');
            navbarCollapse.style.maxHeight = '0';
        }
    };



    burgerMenu.addEventListener('click', () => {
        isOpen = !isOpen;
        navbarCollapse.classList.toggle('show', isOpen);

        if (isOpen) {
            const height = navbarCollapse.scrollHeight;
            navbarCollapse.style.maxHeight = `${height}px`;
        } else {
            navbarCollapse.style.maxHeight = '0';
        }
    });
});

