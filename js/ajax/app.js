// // XMLHTTP REQUEST WAY

// const req = new XMLHttpRequest()

// let data
// req.onload = function() {
//     console.log(this)
//     data = JSON.parse(this.responseText)
//     console.log(data)
// }

// req.onerror = function() {
//     console.log('Erorr',this)
// }

// req.open('GET', 'https://swapi.info/api/people/1');
// req.send();

// Fetch Way

// fetch('https://swapi.info/api/people/1') 

// // kenapa then nya dua
// .then((res) => {
//     if(!res.ok) {
//         throw Error('Could not fetch data for that resource')
//     }

//     return res.json()  
// })

// .then((data) => {
//     console.log('json', data)
// })
// .catch((err) => {
//     console.log('error', err)
// })

// // simple way 

// const loadPeople = async () => {
//     try {
//         for (let i = 1; i <= 10; i++){
//             let res = await fetch(`https://swapi.info/api/people/${i}`)
//             let data  = await res.json();
//             console.log(data)
//         }
//     } catch (err) {
//         console.log('Error', err)
//     }
// }

// console.log(loadPeople())

// Axios, library pihak ketiga untuk melakukan req HTTP

const axiosLoadPeople = async (id) => {

    try{
        const res = await axios.get(`https://swapi.info/api/people/${id}`)
        console.log(res.data)
    }
    
    catch(error){
        console.log(error)

        console.log(error.message)
        console.log(error.response.status)
        console.log(error.response.data)
    }
}

console.log(axiosLoadPeople(10123132131))