function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const player = document.querySelector('#player')
const coin = document.querySelector('#coin')
window.addEventListener('keyup', function (e) {

	if (e.key === 'ArrowDown') {
		const currPos = extraPos(player.style.top)
		player.style.top = `${currPos + 50}px`
	}
	else if (e.key === 'ArrowUp') {
		const currPos = extraPos(player.style.top)
		player.style.top = `${currPos - 50}px`

	}
	else if (e.key === 'ArrowLeft') {
		const currPos = extraPos(player.style.left)
		player.style.left = `${currPos - 50}px`
		player.style.transform = 'scale(-1, 1)';

	}
	else {
		const currPos = extraPos(player.style.left)
		player.style.left = `${currPos + 50}px`
		player.style.transform = 'scale(1, 1)';

	}

	if (isTouching(player, coin)) moveCoin()


})

const extraPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
	const x = Math.floor(Math.random() * 1000)
	const y = Math.floor(Math.random() * 1000)
	coin.style.top = `${x}px`;
	coin.style.left = `${y}px`;
}

moveCoin();