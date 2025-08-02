// console.log('Bakal muncul pertama')
// setTimeout (() => { // sudah masuk ke dalam memory namun calback function nya akan dijalankan setelah waktu atau parameter yang ditentukan
//     console.log('Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan')
// }, 3000);
// console.log('Bakal muncul kedua')


// // setTimeout(function() {
// //     document.body.style.backgroundColor = 'red';
// // }, 1000)

// // setTimeout(function() {
// //     document.body.style.backgroundColor = 'yellow';
// // }, 2000)

// // setTimeout(function() {
// //     document.body.style.backgroundColor = 'green';
// // }, 3000)

// // callback hell(function di dalam function dst), ketika kita ingin menjalankan suatu program yang mana di dalam nya terdapat function yang jika dijalankan berhasil dan akan menjalankan function selanjutnya dst.
// setTimeout(function() {
//     document.body.style.backgroundColor = 'red';
//         setTimeout(function() {
//         document.body.style.backgroundColor = 'yellow';
//             setTimeout(function() {
//             document.body.style.backgroundColor = 'green';
//                     setTimeout(function() {
//                     document.body.style.backgroundColor = 'blue';
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// // call back hell, ketika kita memanggil function di dalam function di dalam function
// searcMoviesApi('naruto', function(movies) {
//     saveToMyDb(
//         movies, function(){
//             // kalau berhasil kita simpan 
//         },
//         () => {
//             // kalau gagal kita coba lagi
//         }
//     )
// }, () => {
//     // handle server error
// })

// Promise(object yang dijanjikan asynchrounus) adalah respon object terhadap bershasil atau tidaknya suatu proses function dengan cara yang lebih elegan, jika berhasil akan menjalankan proses lainnya, jika gagal akan di handle atau menjalankan proses yang ditentukan.

// Promise suatu objek dari hasil  suatu function yang kita jalankan atau kita panggil, yang mana dia memiliki suatu kondisi dimana proses tersebut berhasil atau gagal(error) di jalankan. Kedua respon dapat di manfaatkan untuk proses selanjutnya, pemanggilan nya lebih mudah dibaca di bandingkan dengan menggunakan call back, yang berujung kepada call back hell

// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// memiliki kedua kemungkinan, dan kita bisa menambahkan banyak fungsi di dalamnya, namun kita akan terjebak dalam call back hell
// requestCallback('movie.com', function(response) {
//     console.log('success', response)
//     requestCallback('movie.com', function(response) {
//         console.log('success', response)
//         requestCallback('movie.com', function(response) {
//             console.log('success', response)
//             requestCallback('movie.com', function(response) {
//                 console.log('success', response)
//                 requestCallback('movie.com', function(response) {
//                     console.log('success', response)
//                 }, 
//                 function(error) {
//                     console.log('error', error)
//                 })
//             }, 
//             function(error) {
//                 console.log('error', error)
//             })
//         }, 
//         function(error) {
//             console.log('error', error)
//         })
//     }, 
//     function(error) {
//         console.log('error', error)
//     })
// }, 
// function(error) {
//     console.log('error', error)
// })

// // Promise version
// const requestPromise = (url) => {
// 	return new Promise((resolve, reject) => {
// 		const delay = Math.floor(Math.random() * 4500) + 500;
// 		setTimeout(() => {
// 			if (delay > 2000) {
// 				reject('Error: Connection Timeout');
// 			} else {
// 				resolve(`Success: ${url} (${delay}ms)`);
// 			}
// 		}, delay);
// 	});
// };

// console.log(requestPromise('google.com'))

// // ini masih bisa berpotensi call back hell, karena kita bisa menambahkan fungsi di dalam fungsi di dalam fungsi
// // requestPromise('google.com').then((response)=> { // then untuk handle success
// //     console.log('success', response)
// // }).catch((error) => { // catch untuk menangkap nilai error
// //     console.log('error', error)
// // })

// // cara yang benar menggunakan promise agar tidak berpotensi call back hell, dengan hanya menambahkan callback di setelahnya, dan hanya membutuhkan satu handle error.

// requestPromise('movie.com')
// .then((result) => {
//     console.log('page 1')
//     console.log(result)
//     return requestPromise('movie.com')
// }) 
// .then(()=> {
//     console.log('page 2')
//     return requestPromise('movie.com')
// })
// .then(()=> {
//     console.log('page 3')
//     return requestPromise('movie.com')
// })
// .catch((err) => {
//     console.log(err)
// })


// // async function requestHandler() {
// // 	try {
// // 		let result = await requestPromise('movie.com');
// // 		console.log(result);
// // 	} catch (error) {
// // 		console.log('Pesan Error', error);
// // 	}
// // }

// // const contohPromise = () => {
// // 	return new Promise ((resolve, reject) => {
// // 		resolve(() => {
// // 			'berhasil';
// // 		});
// // 		// reject(() => {
// // 		// 	'gagal';
// // 		// });
// // 	});
// // };

// // console.log(contohPromise())


// const delayedColorChange = (color, delay) => {
// 	return new Promise((resolve, reject) => {
		
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color	
// 			resolve()
// 		}, delay)
// 	});
// };

// // delayedColorChange('red', 1000)
// // 	.then(() => delayedColorChange('yellow', 1000))
// // 	.then(() => delayedColorChange('pink', 1000))
// // 	.then(() => delayedColorChange('tomato', 1000))
// // 	.then(() => delayedColorChange('brown', 1000))
// // 	.then(() => delayedColorChange('blue', 1000))
// // 	.then(() => delayedColorChange('green', 1000))


// // ASYNC
// // function yang di berikan async sebelum function maka otomatis akan menjadi sebuah promise
// const Hello = async () => {
	
// 	throw 'Maaf Gak Kenal'
// 	// return 'Hello World';
// }

// // jika menjadi promise, maka kita dapat menambahkan then untuk melanjutkan ke proses atau response selanjutnnya
// // Kalo funsginya punya data, maka resolve-nya akan mengirimkan data juga yang bisa diolah
// Hello().then((res) => { //then untuk handle resolve
// 	console.log('response: ', res)
// }).catch((err) => { //catch untuk handle throw berupa error
// 	console.log('error', err)
// })

// // kalo di dalam func ada object throw errow, makam akan menjalankan bagian reject.

// // AWAIT

// //keyword await hanya bisa digunakan di dalam function dengan 'async'

// //await akan melakukan jeda proses selanjutnya didalam func yang kita panggil, untuk menunggu promise yang dijalankan resolved


// async function changeColor() {
// 	await delayedColorChange('red', 1000);
// 	await delayedColorChange('yellow', 1000);
// 	await delayedColorChange('green', 1000);
// 	await delayedColorChange('blue', 1000);
// 	await delayedColorChange('purple', 1000);
// 	await delayedColorChange('orange', 1000);
// 	await delayedColorChange('black', 1000);
// 	return 'All Done!';
// }

// changeColor().then((res) => alert(res))

// async function printRainbow() {
// 	await changeColor();
// 	console.log('All Done! Dari printRainbow');
// }

// printRainbow();

// handle err dengan async await

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler() {
	// penggunaan try untuk handling resolve dan catch untuk handling error
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}

console.log(requestHandler())