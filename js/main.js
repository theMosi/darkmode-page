let $ = document;
let father = $.querySelector('body');
let mother = $.querySelector('html');

let darkmode = false;

let darkModeElem = $.querySelector('.dark-mode-switch');

window.addEventListener('load', () => {
    let mode = localStorage.getItem('theme');

    if(mode === 'dark'){
        mother.classList.add('dark');
        darkModeElem.checked = true;
        darkmode = true;
    }else{
        mother.classList.remove('dark');
        darkModeElem.checked = false;
        darkmode = false;
    }
})



darkModeElem.addEventListener('change', () => {
    darkmode = !darkmode;
    
    console.log(darkmode);

    if(darkmode){
        mother.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }else {
        mother.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
})