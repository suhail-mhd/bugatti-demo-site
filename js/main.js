// nav-link

const menuBtn = document.querySelector('.menu-btn'),
      navItem = document.querySelector('.nav-item')

menuBtn.addEventListener('click', () => {
    navItem.classList.toggle('active')
})


// about sec

const tabs = document.querySelectorAll('.tabs');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));

        tab.classList.add('active');

        contents.forEach((c) => c.classList.remove('active'));

        contents[index].classList.add('active');
    });
});
