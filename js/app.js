
// console.log('hello world')

// alert("WOYYY!!!")

// if (1 + 1 === 3) {
//     console.log("Betulll");
// } else {
//     console.log("Salah Woyyy")
// }

// if

// let angka = Math.random();

// console.log(angka);

// if( angka >= 0.5) {
//     console.log('Angka lebih besar dari 0.5')
// }

// if( angka <= 0.5) {
//     console.log('Angka lebih kecl dari 0.5')
// }

// if else if

// const todays = 'Sabtu';

// if (todays === 'Senin') {
//     console.log('Selamat Bekerja Kawan!')
// } else if (todays === 'Sabtu'){
//     console.log('Semoga Tidak Cepat Berlalu')
// }

// const nilai = '40'

// if (nilai < 50){
//     console.log('E')
// } else if(nilai < 60){
//     console.log('D')
// } else if(nilai < 70){
//     console.log('C')
// } else if(nilai < 80){
//     console.log('B')
// } else if(nilai < 100) {
//     console.log("A")
// }

// if else

// const todays = prompt('Isikan hari').toLowerCase();

// if (todays === 'senin') {
//     console.log('Selamat Bekerja Kawan!')
// } else if (todays === 'sabtu'){
//     console.log('Semoga Tidak Cepat Berlalu')
// } else {
//     console.log('Hari biasa saja, teruslah berjalan')
// }

// cek berlapis, atau nested if

// contoh salah

// const password = prompt('Buat password')

// if(password.length >= 6) {
//     console.log("Password Valid")
// } else {
//     console.log("Password minimal 6 karakter")
// }

// if(password.indexOf(' ') === -1) {
//     console.log("Password tidak ada spasi")
// } else {
//     console.log("password tidak boleh ada spasi")
// }

// contoh benar

// nested if

// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//     console.log("Password Valid")
// } else {
//     console.log("password tidak boleh ada spasi")
// }
// } else {
//     console.log("Password minimal 6 karakter")
// }


// Operator logical

// &&(AND), dapat digunakan untuk mempersingkat nested if
// const password = prompt('Buat password')

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('password valid')
// } else {
//     console.log('password tidak memenuhi syarat')
// }

// ||(OR), true jika salah satu benar

// const role = prompt('Masukkan role akun')

// if(role === 'spv' || role === 'admin'){
//     console.log('Anda diizinkan masuk :)')
// } else {
//     console.log('Anda tidak memiliki akses!!')
// }

// !(NOT), negasi true yaitu false

// const role = prompt('Masukkan role akun')

// if(role !== 'admin'){
//     console.log('Anda tidak memiliki akses!!')
// } else {
//     console.log('Anda diizinkan masuk :)')
// }

// Switch

// const balonku = prompt('Masukkan warna balon!')

// switch(balonku) {
//     case 'merah':
//         console.log('warna merah')
//         break;
//     case 'biru':
//         console.log('warna biru')
//         break;
//     case 'kuning':
//         console.log('warna kuning')
//         break;
//     case 'hitam':
//         console.log('warna hitam')
//         break;
//     case 'hijau':
//         console.log('warna hijau adalah balonku')
//         break;
//     default:
//         console.log('Bukan balonku');
// }

// Array, Mememanggil dengan index dan manipulasikan nilai array.

// let warna = ['merah', 'biru', 'kelab', 'bu']

// console.log(warna[3])

// warna[3] = 'pink'

// console.log(warna[3])

// kita bisa memasukkan nilai kedalam kotak yang belum ada nilainya tanpa perlu berurutan dengan menggunakan nilai indexnya, seperti.., namun length yang akan terhitung mengikuti jumlah akhir dari index ke- yang dimasukkan. Contohnya 9, maka indexny ke-9 artinya panjang dari array itu adalah 10

// warna[9] = 'Biru'

// console.log(warna)

// console.log(warna[9])

// console.log(warna.length)

// Method array

// let barbel = []

// console.log(barbel)

// // menambahkan nilai dengan menggunakan nilai index dari array

// barbel[0] = 5

// console.log(barbel)

// // dengan menggunakan method push, kita tidak perlu memikirkan nilai index ke berapa dari array, jadi mencegah kita untuk lupa urutan index ke berapa saat ini. Metode ini memasukkan nilai ke dalam array dari posisi akhir array.

// barbel.push(10, 15, 20, 25)

// console.log(barbel)

// // sama halnya dengan menghapus(pop) memiliki tujuan yang sama dan metode yang digunakan sama yaitu menghapus dari posisi akhir array.

// barbel.pop()

// console.log(barbel)

// // shift, merupakan method kebalikan dari pop, yaitu menghapus nilai dari awal array.

// barbel.shift()

// console.log(barbel)

// sedangkan unshift yaitu menambahkan nilai dari awal array

// barbel.unshift(2.5, 3, 5)

// console.log(barbel.join(" "))

// const board = [
//     [null, null, 'O'],
//     ['X', 'O', null],
//     ['O', null, 'X'],
// ];

// console.log(board)
// console.log(board[1][0])

// // Object, dapat menyimpan semua tipe data termasuk object di dalam object sekalipun

// const human ={
//     name : 'pijuyy',
//     birthDate : 16-12-2002,
//     age : 22,
//     region : 'Pangkal Pinang'
// }

// const item = {
//     title : 'T-Shirt',
//     price : 150000,
//     isReady : true,
//     size : ['s','m','l','xl'],
//     location: {
//         indonesia : 90,
//         malaysi : 40
//     }

// }

// console.log(human)
// console.log(item)

// memanggil data dari object
// untuk memanggil key, jadikan key seperti memperlakukan string ['key'], namun ini kebiasaan array saat memanggil data karena menggunakan []
// console.log(human['name'])

// yang lebih efektif adalah dengan metode object yaitu menggunakan namaObject.namaKey

// console.log(human.age)
// console.log(human.region)

// console.log(item.location.indonesia)
// console.log(item.size[3])

// membuat object berjalan

// memanipulasi object

// human['name'] = 'rahman'

// console.log(human.name)

// human.age = 23

// console.log(human.age)

// human.gender = 'pria'

// console.log(human)

// memanggil object di dalam array

// const shoppingCart = [
//     {
//         product : 'film',
//         price : 1000, 
//         quantity : 20
//     },
//         {
//         product : 'music',
//         price : 100, 
//         quantity : 15
//     },
//         {
//         product : 'book',
//         price : 10, 
//         quantity : 10
//     }
// ]

// console.log(shoppingCart[0])
// console.log(shoppingCart[0].quantity)

// // perulangan for

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// for(let i = 10; i <= 100000; i*=10){
//     console.log(i)
// }

// // infinity loop

// // for(let i=20; i>=0;i++){
// //     console.log(i)
// // }

// const pokemon = ['charmender','balbasaur','squirtle' ]

// for (let i = 0; i < pokemon.length;i++){
//     console.log(i+1,pokemon[i])
// }

// // Nested Loop

// const str = 'LOL'

// for(let i=1; i<=4;i++){
//     console.log('Outer: ',i)
//     for(let j=0;j<str.length;j++){
//         console.log('Inner: ',str[j])
//     }
// }

// const answer = 'abcd'

// for(let i = 1; i <= 5; i++){
//     console.log(`Soal ke-${i}`)
//     for(let j = 0; j<answer.length;j++){
//         console.log(`${answer[j]}.Merupakan jawaban`)
//     }
// }

// const typePokemon = [
//     ['charmender', 'vulpix','ponyta'],
//     ['squirtle','gyarados','horsea'],
//     ['trecko','bulbasaur','tutwig']
// ]

// for(let i = 0 ; i<typePokemon.length;i++){
//     console.log(`type pokemon ke-${i+1}`)
//     const row = typePokemon[i]
//     for(let j=0;j<row.length;j++){
//         console.log(row[j])
//     }
// }

// // while

// let num = 0
// while(num < 10){
//     console.log(num)
//     num++
// }

// const password = 'Hafidzurr1'

// let guess = prompt('Masukkan password')
// while(guess !== password){
//     alert('Your password is wrong!')
//     guess = prompt('Masukkan password')
// }

// alert('Your password is correct, you can access the page')

// break

// let input = prompt('Hey, say something!')

// while (true) {
//     input = prompt(input)
//     if(input.toLowerCase() === 'stop') break;
// }

// alert('ok')

// for(let i=0;i<10000;i++){
//     console.log(i)
//     if(i===100)break;
// }

// let maximumNumber = parseInt(prompt('Fill it with your lucky number'))

// while(!maximumNumber) {
//     maximumNumber = parseInt(prompt('fill it again'))
// }

// const targetNum = Math.floor(Math.random() * maximumNumber) + 1
// console.log(targetNum)

// let guess = parseInt(prompt('Fill with your choosing first'))
// let attempts = 1

// while(parseInt(guess) !== targetNum){
//     attempts++
//     if(guess > targetNum){
//         guess = parseInt(prompt('Your number to high, guess again'))
//     } else {
//         guess = parseInt(prompt('Your number to low, guess again'))
//     }
// }

// alert(` Congratulations you is right and the number is ${targetNum}, you already attempts ${attempts} much `)


// const pokemons = ['charmender','balbasaur','squirtle' ] 

// // for...of

// for(let pokemon of pokemons ){
//     console.log(`pokemon ${pokemon}`)
// }

// const typePokemon = [
//     ['charmender', 'vulpix','ponyta'],
//     ['squirtle','gyarados','horsea'],
//     ['trecko','bulbasaur','tutwig']
// ]

// for( let row of typePokemon){
//     for(let pokemon of row) {
//         console.log(pokemon)
//     }
// }

// const items = {
//     title : 'T-Shirt',
//     price : 150000,
//     isReady : true,
//     size : ['s','m','l','xl'],
//     location: {
//         indonesia : 90,
//         malaysi : 40
//     }

// }

// // for...in

// for(let item in items) {
//     console.log(`${item} : ${items[item]}`)
// }

// function 

let lemparDadu = Math.floor(Math.random() * 6) + 1
console.log(lemparDadu)

// solution if we wanna use thats process again and again is using function

function rideDice() {
    console.log(Math.floor(Math.random() * 6) + 1)
}

rideDice()


function sing(){
    console.log('rokok itu tidak baik')
    console.log('rokok itu menyesatkan')
    console.log('stop...stop...stop')
}

sing()


function hallo(name){
    console.log(`Hallo, ${name}`)
}

// argument have a freedom rule for fill it, but still remember what parameter do you need so

hallo('Pijuyy')

// multiple argument and parameter

function sumIt(a,b){
    const total = a + b
    console.log(total)
}

sumIt(1,2)

// return 

function sumIt(a,b){
    const total = a + b
    return total
    console.log('selesai') // after return, all the process after that will not executed.
}

// we call in terminal and we can save in variable
let result = sumIt(1,2)

function Itsum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Bukan angka woy';
    }

    return a + b;
}

// Scope
// ini akan tetap charizard karena var hanya di ubah di function
// let pokemon = 'charizard'

// function poke(){
//     pokemon = 'pikachu'
//     console.log(pokemon)
// }

// console.log(pokemon)

// tapi jika kita def function, maka var akan berubah menjadi pikachu
// let pokemon = 'charizard'

// function poke(){
//     pokemon = 'pikachu'
//     console.log(pokemon)
// }

// poke()

// kalau ini tetap bisa, karena di def di function dan functionnya dpanggil

// function poke(){
//     let pokemon = 'pikachu'
//     console.log(pokemon)
// }

// poke()

// ini tidak bisa, karena var tidak akan bisa diakses kalau function nya tidak di panggil 


// function poke(){
//     let pokemon = 'pikachu'
//     console.log(pokemon)
// }

// console.log(pokemon)

// kalau ini, karena sudah di ubah di function dan function nya di panggil, jika di cetak maka akan menampilkan var yang ada di function


// let pokemon = 'charizard'

// function poke(){
//     pokemon = 'pikachu'
//     console.log(pokemon)
// }

// poke()
// console.log(pokemon)

// kecuali jika di def ulang di dalam function, maka hal tsb tidak berpengaruh

let pokemon = 'charizard'

function poke(){
    let pokemon = 'pikachu'
    console.log(pokemon)
}

poke()
console.log(pokemon)

// Blocked scope variabel
// let tall = 8

// if(tall > 5) {
//     let lebar = 10
//     console.log(lebar)
// } 

// console.log(tall)

// we can't like this because let and const have blocked scope, but if we define with var, we can acces the value and variabel because var have own rule or universal so we can manipulated and no blocked in scope.
// let tinggi = 8

// if(tinggi > 5) {
//     let lebar = 10
//     // console.log(lebar)
// } 

// console.log(lebar)

// let tinggi = 8

// if(tinggi > 5) {
//     var lebar = 10
//     // console.log(lebar)
// } 

// console.log(lebar)

// lexical scope, jika di dalam function terdapat function, maka function yang di dalam harus dipanggil. 

function lamarKerja(){
    const jabatan = "programmer"

    function orangDalam(){
    let kenalan = `Orang dalam bisa masukkan ${jabatan}`
    console.log(kenalan)
}
orangDalam()
}

// function expression 

// this along way

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5)

// this Function Expression way 

const hasilperpangkatan = function(nilai, pembanding){
    return nilai * pembanding;
}

console.log(hasilperpangkatan(2,5))

// Use function for argument in another function 

function duaKali(func){
    func()
    func()
}

function lemparDice() {
    const hasil = Math.floor(Math.random()*6) + 1;
    console.log(hasil)
}

// jadi mendeklarasikan argumen kedalam argument lain, namun hal yang perlu diperhatikan adalah argumen ketika pemanggilan func tidak perlu ditambahkan (), karena function yang dijadikan argument yang malah di jalankan, bukan function yang menggunakan function sebagai argumen yang dijalankan dan memanfaatkan function argument tersebut.
console.log(duaKali(lemparDice))

// function menghasilkan atau bernilai balik function 

function resultIsFunc() {
    const rand = Math.random()
    if(rand > 0.1) {
        return function(){
            console.log('Selamat angkanya lebih besar');
        };
    }else {
        return function(){
            console.log('Maaf, mungkin bisa coba lagi')
        };
    }
}

// jika dijalankan maka outputnya berupa function
console.log(resultIsFunc())

// solusinya adalah menyimpan hasil atau function tsb ke dalam variabel dan di deklarasikan kembali seperti function, karena value didalamnya berupa function.

let hasil = resultIsFunc()

console.log(hasil())


// Method, suatu function yang ada didalam sebuah properti. method adalah properti yang memiliki funtion di dalamnya atau Suatu func yang di def di dalam suatu objek

// Ini adalah contoh function biasa
function myFunc(){
    console.log('Hi')
    return 'Hello';
}

// ini contoh object dan method

const myMath = { //object
    perkalian : function(x,y){ //method
        return x*y;
    },
};

console.log(myFunc())
console.log(myMath.perkalian(2,6))

// this adalah keyword untuk memanggil suatu property pada object yang sama. Tujuannya adalah untuk mendapatkan nilainya

// const saya = {
//     nama : 'Pijuyy',
//     hobi : 'Baca buku',
//     kenalan: function(){
//         return `Hi, saya ${this.nama} dan hobi saya adalah ${this.hobi}.`
//     }
// }

// console.log(saya.kenalan())
// console.log(saya.nama)
// console.log(saya.hobi)

// try and catch, sebuah pengkondisian yang digunakan untuk mengatasi error

// try { // proses untuk mencoba melakukan sesuatu program atau logic  
//     saya.kenalan();
// } catch { // kesalahan terjadi atau error pada try akan ditangkap oleh catch dan mengirimkan pesan error. dia jug mencegah program berhenti karena error, dengan kata lain apabila ini error, maka logic atau program selanjutnya masih tetap berjalan
//     console.log('error!!');
// }

// // saya.kenalan()
// console.log('Tetap berjalan woy')


function teriak(msg){
    try {
        console.log(msg.toUpperCase())
    } catch(error) {
        console.log(error)
        console.log('Error, please put string in message')
    }
}

console.log(teriak('ojek'))
console.log(teriak(1212121))

// map adalah suatu function yang di miliki oleh tipe data array, map salah satu function yang bisa menerima callback function. nilai baliknya adalah array baru yang sudah dimodifikasi melalaui callback function dari suatu array.
// output dari map adalah array. memanipulasi array yang ada, lalu melakukan re group nya menjadi array kembali

const angka = [1,2,3,4,5,6,7,8,9];

const doubleAngka = angka.map(function(num){
    return num * 2;
})

console.log(angka)
console.log(doubleAngka)

let animek = [
    {
        title : 'Naruto',
        rating : 90
    },
    {
        title : 'One Piece',
        rating : 95
    },
    {
        title : 'Kimetsu No Yaiba',
        rating : 97
    },
    {
        title : 'Dragon Ball',
        rating : 80
    }
];

// Penggunaan map untuk mengambil data title dari array animek

const animeList = animek.map(function(anime){
    return anime.title.toUpperCase()
});

console.log(animek)
console.log(animeList)

// forEach dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array.

const numbering = [1,2,3,4,5,6,7,8,9]

// tradisional way
// function print(element){
//     console.log(element)
// }

// console.log(print(angka[0]))
// console.log(print(angka[1]))

// forEach way
// numbering.forEach(function(el){
//     if(el % 2 === 0){
//         console.log(el)
//     }
// })

animek.forEach(function(anime){
    console.log(`${anime.title} - ${anime.rating}/100`)
})