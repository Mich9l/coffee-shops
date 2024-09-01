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

fetchHandler();



const html = `

    <img  > 
`

imageBestCoffee.insertAdjacentHTML("beforeend",html)




function HandleClick(){
    const image = ['../assets/coffee-packet.png' ,'../assets/coffee-packet.png','../assets/coffee-packet.png']
    const container = document.createElement('div')
    container.classList.add('coffee-salary-section__product')
    if (btnAllProduct.style.display === "block"){
        btnAllProduct.style.display = "none"
    }else{
        btnAllProduct.style.display = "grid"
    }
}
HandleClick()