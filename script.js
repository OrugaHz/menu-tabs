const menuSections = document.querySelectorAll('.menu-section');
const menuBtns = document.querySelectorAll('.menu-tab');

const showInfo = id => {
    menuSections.forEach(section => section.style.display = 'none');
    document.getElementById(id).style.display = "block";

    menuBtns.forEach(btn => btn.classList.remove('menu-tab-active'));
    const activeBtns = document.querySelector(`[data-id = ${id}`);
    activeBtns.classList.add('menu-tab-active');

}