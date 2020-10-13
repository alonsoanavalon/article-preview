const d = document;
const html = document.documentElement;
const body = document.body;

const $btnShare = document.querySelector(".wrap-art__btn")
const $cardShare = document.querySelector(".card-media")

function clickBtn (e) {
    if (e.target.matches(".wrap-art__btn")){
     
    $cardShareClass = getComputedStyle($cardShare).getPropertyValue("visibility")

    

    if ($cardShareClass == "visible"){
        $cardShare.style.setProperty("visibility", "hidden")
    } else {
        $cardShare.style.setProperty("visibility", "visible")
    }     
    




    }
}

$btnShare.addEventListener("click", e => {

    console.log("hola")

    clickBtn(e)

})