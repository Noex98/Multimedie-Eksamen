const img = document.querySelectorAll('.picture');

function filterImg(filter){
    for (let i = 0; i < img.length; i++){
        if (img.item(i).classList.contains(filter)){
            img.item(i).style.display = "block"
        } else {
            img.item(i).style.display = "none"
        }
    }
}