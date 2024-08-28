const imageBestCoffee = document.querySelector(".api-coffee__img")

const URL = "https://coffee.alexflipnote.dev/random.json"

async function fetchHandler(){
    try{
        const response = await fetch(URL)
        const data = await response.json()
        imageBestCoffee.src = data.file
    }
    catch (error){
        console.log(error)
    }
    finally {
        console.log("Закончился асинхронный запрос")
    }

}

fetchHandler(); // Вызываем функцию после того, как элемент найден

// Не устанавливаем src здесь
const html = `

    <img src="" > 
`
imageBestCoffee.insertAdjacentHTML("beforeend",html)


