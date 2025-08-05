const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addJoke = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

const getJokes = async () => {

    try {
        // kenapa perlu menyertakan header?, karena ketika kita ingin mendapatkan data dari api dad, di perlukan header yang berisikan accept
        const config = {
            headers: {
                Accept: 'application/json'
            },
        }
        const res =  await axios.get('https://icanhazdaddadadajoke.com', config)
        return res.data.joke
    } catch (error) {
        return 'No Jokes Available'
    }
}

button.addEventListener('click', addJoke)

