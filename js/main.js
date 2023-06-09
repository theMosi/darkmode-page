let $ = document;
let father = $.querySelector('body');
let mother = $.querySelector('html');

let darkmode = false;

let darkModeElem = $.querySelector('.dark-mode-switch');

let dayElem = $.querySelector('#day'); 
let hourElem = $.querySelector('#hour');  
let minuteElem = $.querySelector('#minute'); 
let secondElem = $.querySelector('#second');  

let day = 0;
let hour = 0;
let minute = 0;
let second = 0;

let endDate = new Date(2023,8,5).getTime();


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


setInterval(() => {
    let nowData = new Date().getTime();
    let time = endDate - nowData;

    if (time >= 0){
        day = format(Math.floor(time / (1000 * 60 * 60 *24)));
        hour = format(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minute = format(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        second = format(Math.floor((time % (1000 * 60)) / 1000));

        dayElem.innerHTML = day;
        hourElem.innerHTML = hour;
        minuteElem.innerHTML = minute;
        secondElem.innerHTML = second;
    }
}, 1000);

let format = (num) => {
    return num < 10 ? '0' + num : num;
}



/* iTyped */
const textElement = document.querySelector('#text');
    ityped.init(textElement, { strings: ['یک متن تخیلی از من است...', 'شما این را می خوانید', 'زیرا من برای شما تصمیم گرفته ام.'] 
});


/* leaflet */
const map = L.map('map').setView([35.67426901547201, 51.394755885994755], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([35.67426901547201, 51.394755885994755]).bindPopup("Hello There").addTo(map).openPopup();

	const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(map);

