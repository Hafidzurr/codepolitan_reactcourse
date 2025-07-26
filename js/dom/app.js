// const button = document.querySelector('#clickMe')

// button.onclick = function() {
//     console.log('You Clicked Me')
// };

// const noper = () => {
//     console.log('dont touch me')
// }

// button.onmouseover = noper;

// const eventBtn = document.querySelector('#eventBtn')

// // 
// // eventBtn.addEventListener('click',() => {
// //     alert('Clicked Already')
// //  });
// // event di asumsikan menjalankan dua fungsi yang berbeda, sehingga addEventListener dapat di manfaatkan untuk dapat menjalankan dua fungsi atau lebih secara langsung
// eventBtn.addEventListener('click', setepSatu)
// eventBtn.addEventListener('click', setepDua)

// function setepSatu() {
//     console.log('Setep 1')
// }

// function setepDua() {
//     console.log('Setep 2')
// }
// onclick merupakan properti yang dimiliki oleh suatu element, jadi jika kita sudah pernah menambahkan dan menambhkan nilai baru maka nilai lama akan di replace, itu merupakan ciri dari sebuah properti, dan dapat diasumsikan sebagai variable atau wadah.
// eventBtn.onclick = setepSatu
// eventBtn.onclick = setepDua


// const generateRandomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     return `rgb(${r}, ${g}, ${b})`;
// };

// // ketika kita berinteraksi dengan event yang sama dan ingin di gunakan pada element yang berbeda, this dapat dimanfaatkan untuk mempresentasikan object yang dipilih atau yang dikenakan event.

// const buttons = document.querySelectorAll('button')

// for (let button of buttons) {
//     button.addEventListener('click',colorize)
// };

// const headings = document.querySelectorAll('h1')

// for (let heading of headings) {
//     heading.addEventListener('click', colorize)
// };

// function colorize() {
//     this.style.backgroundColor = generateRandomColor();
//     this.style.color = generateRandomColor();
// }

// jamak way

// const buttons = document.querySelectorAll('button')

// for (let button of buttons) {
//     button.addEventListener('click',() => {
//         button.style.backgroundColor = generateRandomColor();
//         button.style.color = generateRandomColor();
//     })
// };

// const headings = document.querySelectorAll('h1')

// for (let heading of headings) {
//     heading.addEventListener('click', () => {
//         heading.style.backgroundColor = generateRandomColor();
//         heading.style.color = generateRandomColor();
//     })
// };

// addEventListener input by keyboard

// document.querySelector('button').addEventListener('click', (e) => {
//     console.log(e)
// })

// const input = document.querySelector('input');

// // input.addEventListener('keydown', (e) => {
// //     console.log('Tombol ditekan')
// //     console.log(e)
// //     console.log(e.key)
// //     console.log(e.code)
// // })

// input.addEventListener('keydown', (e) => {
//     switch (e.code) {
//         case 'ArrowUp' : 
//         console.log('Tombol Atas')
//         break;
//         case 'ArrowDown' : 
//         console.log('Tombol Bawah')
//         break;
//         case 'ArrowLeft' : 
//         console.log('Tombol Kiri')
//         break;
//         case 'ArrowRight' : 
//         console.log('Tombol Kanan')
//         break;
//         default :
//         console.log('abaikan')
//     }
// })

// input.addEventListener('keyup', () => {
//     console.log('Tombol dilepas')
// })

const form = document.querySelector('#form')

// form.addEventListener('submit', function(){
//     console.log('submited')
// })

// form.addEventListener('submit', function(e){
//     // menecegah suatu action atau behavior element itu ngapain, dan tidak melanjutkan seperti behavior yang seharusnya, berguna banget untuk mengolah data tanpa refresh ulang halaman atau menghalang behavior element lainnya berjalan
//     e.preventDefault()
//     console.log('submited form ')
// });

// const linke = document.querySelector('a')

// linke.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('Telah di-click, namun tidak pindah ke halaman atau melanjutkan behavior karena preventDefault')
// });

// study case, take data realtime

const input = document.querySelector('input')
const list = document.querySelector('#notes')

// event change akan bekerja jika kita melakukan perubah pada input dan tidak terjadi jika kita tidak mengubah value dari inputan 

// input.addEventListener('change', (e) =>{
//     console.log('Nilai Berubah')
// })

// event input dan change berguna untuk menghindari kita memasukkan inputan tidak melalui keyboard

// event input, inputan value yang bisa dimasukkan ke form atau inputan maka akan di proses kecuali selain huruf angka symbol, yaitu seperti ctrl, capslock, tab dan lainnya 
input.addEventListener('input', (e) =>{
    document.querySelector('h1').innerText = input.value
    console.log('Nilai Berhasil di input')
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    const noteValue = input.value
    const newList = document.createElement('li')
    newList.innerText = noteValue

    list.append(newList)
    input.value = '';

    console.log(newList)
});

