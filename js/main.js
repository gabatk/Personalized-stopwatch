const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.archive');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paintbrush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			seconds++;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Last result: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
	}

	clearStuff();
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	timesArr = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showArchive = () => {
	timeList.textContent = '';
	let num = 1;

	timesArr.forEach(time => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Result no. ${num}: <span>${time}</span>`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
	} else {
		modalShadow.style.display = 'none';
	}
	modalShadow.classList.toggle('modal-animation');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e =>
	e.target === modalShadow ? showModal() : false
);

colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors');
});

// Updating a CSS Variable with JavaScript:
colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(220, 156, 45)');
	root.style.setProperty('--hover-color', 'rgb(236, 128, 55)');
});

colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
	root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
	root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});
