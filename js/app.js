
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

let barbel = []

console.log(barbel)

// menambahkan nilai dengan menggunakan nilai index dari array

barbel[0] = 5

console.log(barbel)

// dengan menggunakan method push, kita tidak perlu memikirkan nilai index ke berapa dari array, jadi mencegah kita untuk lupa urutan index ke berapa saat ini. Metode ini memasukkan nilai ke dalam array dari posisi akhir array.

barbel.push(10, 15, 20, 25)

console.log(barbel)

// sama halnya dengan menghapus(pop) memiliki tujuan yang sama dan metode yang digunakan sama yaitu menghapus dari posisi akhir array.

barbel.pop()

console.log(barbel)

// shift, merupakan method kebalikan dari pop, yaitu menghapus nilai dari awal array.

barbel.shift()

console.log(barbel)

// sedangkan unshift yaitu menambahkan nilai dari awal array

barbel.unshift(2.5, 3, 5)

console.log(barbel.join(" "))

const board = [
    [null, null, 'O'],
    ['X', 'O', null],
    ['O', null, 'X'],
];

console.log(board)
console.log(board[1][0])

// Object, dapat menyimpan semua tipe data termasuk object di dalam object sekalipun

const human ={
    name : 'pijuyy',
    birthDate : 16-12-2002,
    age : 22,
    region : 'Pangkal Pinang'
}

const item = {
    title : 'T-Shirt',
    price : 150000,
    isReady : true,
    size : ['s','m','l','xl'],
    location: {
        indonesia : 90,
        malaysi : 40
    }

}

console.log(human)
console.log(item)

// memanggil data dari object
// untuk memanggil key, jadikan key seperti memperlakukan string ['key'], namun ini kebiasaan array saat memanggil data karena menggunakan []
console.log(human['name'])

// yang lebih efektif adalah dengan metode object yaitu menggunakan namaObject.namaKey

console.log(human.age)
console.log(human.region)

console.log(item.location.indonesia)
console.log(item.size[3])

// membuat object berjalan

// memanipulasi object

human['name'] = 'rahman'

console.log(human.name)

human.age = 23

console.log(human.age)

human.gender = 'pria'

console.log(human)

// memanggil object di dalam array

const shoppingCart = [
    {
        product : 'film',
        price : 1000, 
        quantity : 20
    },
        {
        product : 'music',
        price : 100, 
        quantity : 15
    },
        {
        product : 'book',
        price : 10, 
        quantity : 10
    }
]

console.log(shoppingCart[0])
console.log(shoppingCart[0].quantity)