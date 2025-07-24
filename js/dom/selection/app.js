const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
	console.log(img.src);
	// img.src =
	// 	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
	img.src =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVkKWkpamXCWnQhbebtGbH_Z0HO8zzJXthA&s';
}

const links = document.querySelectorAll('.coba a');

for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
