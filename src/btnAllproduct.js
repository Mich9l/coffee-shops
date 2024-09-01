
const btnImage =document.getElementById("btn-hide")
const div = document.getElementById('coffee-salary-section__wrap-hide')

function toggleDivVisibility(){
    if (div.style.display ==="none"){
        div.style.display = "block"
    }else {
        div.style.display = "none"
    }
}

btnImage.addEventListener('click',toggleDivVisibility)