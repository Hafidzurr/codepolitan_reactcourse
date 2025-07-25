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

const links = document.querySelectorAll('a');

for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}

const heading = document.querySelector('h1')
console.log(heading.innerText)
console.log(heading.textContent)
console.log(heading.innerHTML)
console.dir(heading)

const para = document.querySelector('p')
// console.log(para.innerText = 'Kita ubah ni paragrafnyaa')
// console.log(para.textContent = '<b>Kita ubah ni paragrafnyaa</b>')
// console.log(para.innerHTML ='<b>Kita ubah ni paragrafnyaa</b>')

const banner = document.querySelector('#banner')
console.log(banner.attributes)
console.log(banner.id)
console.log(banner.src)
console.log(banner.alt = 'Gambar Kucing')
console.log(banner.setAttribute('class', 'classOfCat'))
console.log(banner.getAttribute('class'))

console.log(heading.style)
// cyan bisa muncul karena dituliskan secara inline karena dapat diakses oleh object style, namun jika dituliskan di css secara terpisah tidak dapat diakses oleh project style
console.log(heading.style.color)

console.log(heading.getAttribute('class'))
// penimpaan 
console.log(heading.setAttribute('class','border-danger'))
console.log(heading.setAttribute('class','bg-info'))

// hard way solution
let currentValue = heading.getAttribute('class')

console.log(heading.setAttribute('class',`${currentValue} border-danger`))
console.log(heading.setAttribute('class',`${currentValue} text-white`))

// simple way, class list is updated class in simple way, and y not must fill it into inline 

console.log(heading.classList)
console.log(heading.classList.add('border-danger'))
console.log(heading.classList.remove('text-white'))
console.log(heading.classList)
console.log(heading.classList.contains('bg-info'))
console.log(heading.classList.contains('text-white'))

const textBold = document.querySelector('b')
console.log(textBold)
console.log(textBold.parentElement)
console.log(textBold.parentElement.parentElement)
console.log(textBold.parentElement.parentElement.parentElement)

const parag = textBold.parentElement

console.log(parag)
console.log(parag.children)
console.log(parag.children[6])
console.log(parag.children[6].childElementCount)
console.log(parag.children[6].children)
console.log(parag.children[6].parentElement)

const squareImg = document.querySelector('.square')
console.log(squareImg)
// merujuk pada penulisan kode pada source code, menuju ke penulisan kode sebelumnya 
console.log(squareImg.previousSibling)
// merujuk pada penulisan kode pada source code, menuju ke penulisan kode setelahnya 
console.log(squareImg.nextSibling)
// untuk mendapatkan elementnyaa, gunakan ini : 
console.log(squareImg.previousElementSibling)
console.log(squareImg.nextElementSibling)

const newImage = document.createElement('img')

console.dir(newImage)
console.log(newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMMWd08C5AE2EXAyUKJ_5SLvDntWHayN0uA&s')
// object html
console.log(document.body.appendChild(newImage))
console.log(newImage.classList.add('square'))
// menambahkan text
console.log(parag.append('<b>Cat</b>'))
// menambahkan element diantara element yang berdekatan
const h2 = document.createElement('h2')
console.log(h2.append('This about cat'))
const h2Two = document.createElement('h2')
console.log(h2Two.append('This about C'))
const h2Tree = document.createElement('h2')
console.log(h2Tree.append('This about A'))
const h2Four = document.createElement('h2')
console.log(h2Four.append('This about T'))
console.log(heading.insertAdjacentElement('afterend',h2))
console.log(heading.insertAdjacentElement('afterbegin',h2Two))
console.log(heading.insertAdjacentElement('beforeend',h2Tree))
console.log(heading.insertAdjacentElement('beforebegin',h2Four))

// Menghapus element, pilih parent dan panggil remove child

const firstList = document.querySelector('li')
console.log(firstList)
console.log(firstList.parentElement)
console.log(firstList.parentElement.removeChild(firstList))

// praktis way use element.remove()

const chooseImg = document.querySelector('img')
console.log(chooseImg)
console.log(chooseImg.remove())
