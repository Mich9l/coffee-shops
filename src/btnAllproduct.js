
const btnImage =document.getElementById("btn-hide")
const div = document.getElementById('coffee-salary-section__wrap-hide')

function toggleDivVisibility(){
    if (div.style.display ==="none"){
        div.style.display = "block"
        btnImage.innerText = "All products"
    }else {
        div.style.display = "none"
        btnImage.innerText = "View all products"
    }
}

btnImage.addEventListener('click',toggleDivVisibility)



