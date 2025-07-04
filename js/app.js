
// console.log('hello world')

// alert("WOYYY!!!")

// if (1 + 1 === 3) {
//     console.log("Betulll");
// } else {
//     console.log("Salah Woyyy")
// }

// let angka = Math.random();

// console.log(angka);

// if( angka >= 0.5) {
//     console.log('Angka lebih besar dari 0.5')
// }

// if( angka <= 0.5) {
//     console.log('Angka lebih kecl dari 0.5')
// }

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

const password = prompt('Buat password')

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

if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
    console.log("Password Valid")
} else {
    console.log("password tidak boleh ada spasi")
}
} else {
    console.log("Password minimal 6 karakter")
}

