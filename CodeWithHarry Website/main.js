const menu = document.getElementById('menu');
const navLinks = document.getElementById('navlinks');

const search = document.getElementById('searchBar');
const searchIcon = document.getElementById('searchIcon');


const textAnim = document.querySelector('.text-anim');

const themeChange = document.querySelector('.theme-change');


const ChangeText = () => {
        setTimeout(() => {
            textAnim.textContent = 'Machine Learning';
        }, 0);

        setTimeout(() => {
            textAnim.textContent = 'Data Science';
        }, 2000);

        setTimeout(() => {
            textAnim.textContent = 'Web Development';
        }, 4000);

        setTimeout(() => {
            textAnim.textContent = 'C Programming';
        }, 6000);

        setTimeout(() => {
            textAnim.textContent = 'Python';

        }, 8000);

        setTimeout(() => {
            textAnim.textContent = 'C++';
        }, 10000);

        setTimeout(() => {
            textAnim.textContent = 'Java';
        }, 12000);
        
        setTimeout(() => {
            textAnim.textContent = 'DSA';
        }, 14000);
}

ChangeText();
setInterval(ChangeText, 14000);

searchIcon.addEventListener('click', () => {
    if(search.style.display === 'none') {
        search.style.display = 'block';
    } else {
        search.style.display = 'none';
    }
});

menu.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
        textAnim.style.display = 'none';
    } else {
        navLinks.style.display = 'none';
        textAnim.style.display = 'inline-block';
    }
});

let theme = 'dark';

const ChangeTheme = () => {
    if(theme === 'dark') {
    document.documentElement.style.setProperty('--main-col', '#9333EA');
    document.documentElement.style.setProperty('--bg-col', '#ffffff');
    document.documentElement.style.setProperty('--sec-bg-col', '#ffffff');
    document.documentElement.style.setProperty('--man-bg-col', '#e7e7e7af');
    document.documentElement.style.setProperty('--white', '#000000');
    // document.documentElement.style.setProperty('--light-white', '#21212177');
    document.documentElement.style.setProperty('--light-white', '#262626be');
    document.querySelector('.footer-info').style.borderLeft = '2px solid #21212177';
    document.querySelector('.col-1 button').style.backgroundColor = '#111827';
    document.querySelector('.col-1 button').style.color = '#fff';
    document.querySelector('.navigationBar').style.borderBottom = '1px solid rgb(87 85 85 / 40%)';
    themeChange.style.transform = 'rotate(360deg)';
    
    document.querySelector('.box-1').style.boxShadow = 'black -1px 0px 5px 0px';
    document.querySelector('.box-2').style.boxShadow = 'black -1px 0px 5px 0px';
    document.querySelector('.box-3').style.boxShadow = 'black -1px 0px 5px 0px';

    theme = 'light';
} else {
    document.documentElement.style.setProperty('--main-col', '#D8B4FE');
    document.documentElement.style.setProperty('--bg-col', '#111827');
    document.documentElement.style.setProperty('--sec-bg-col', '#1f2937');
    document.documentElement.style.setProperty('--man-bg-col', '#374151');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--light-white', '#ffffff77');
    document.querySelector('.footer-info').style.borderLeft = '2px solid #fff';
    document.querySelector('.col-1 button').style.backgroundColor = '#fff';
    document.querySelector('.col-1 button').style.color = '#000';
    document.querySelector('.navigationBar').style.borderBottom = '1px solid #848484a3';
    themeChange.style.transform = 'rotate(180deg)';

    document.querySelector('.box-1').style.boxShadow = 'var(--bg-col) -1px 0px 5px 0px';
    document.querySelector('.box-2').style.boxShadow = 'var(--bg-col) -1px 0px 5px 0px';
    document.querySelector('.box-3').style.boxShadow = 'var(--bg-col) -1px 0px 5px 0px';
    theme = 'dark';
    }
}

themeChange.addEventListener('click', ChangeTheme);