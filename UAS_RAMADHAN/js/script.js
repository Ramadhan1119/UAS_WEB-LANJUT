// const NavLink = document.querySelectorAll('.nav-link');

// NavLink.forEach(NavLinks => {
//     NavLinks.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         NavLinks.classList.add('active');
//     });
// });

const containerFaq = document.querySelectorAll('.content-faq');

for (i = 0; i<containerFaq.length; i++ ){
    containerFaq[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
};

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
});

const contentAbout = document.querySelectorAll('.content-about');
const btnAbout = document.querySelector('.btn-about');

btnAbout.addEventListener('click', () => {
    contentAbout.classList.toggle('active')
});