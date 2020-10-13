const d = document;
const html = document.documentElement;
const body = document.body;

const $btnShare = document.querySelector(".wrap-art__btn")
const $cardShare = document.querySelector(".card-media")

function clickBtn (e) {
    if (e.target.matches(".wrap-art__btn")){
     
   /*      setTimeout(() => {

            
            if (getComputedStyle($cardShare).getPropertyValue("visibility") == 'visible') {
                $cardShare.style.setProperty("visibility", "hidden")
            }
    
            if (getComputedStyle($cardShare).getPropertyValue("visibility") == 'hidden') {
                $cardShare.style.setProperty("visibility", "visible")
            }
    
        }, 100)
 */

        $cardShare.classList.toggle("card-media")
     
    




    }
}

d.addEventListener("click", e => {

    clickBtn(e)

})