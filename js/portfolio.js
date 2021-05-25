const img = document.querySelectorAll('.main__imgContainer img');
const btn = document.querySelectorAll('.main__btnContainer button');

// Adding eventlisteners to buttons
for (let i = 0; i < btn.length; i++){
    btn.item(i).addEventListener('click', () => {
        // Make sure that the first button shows all imgs
        if (i == 0){
            for (let i = 0; i < img.length; i++){
                img.item(i).style.display = "block"
            }
        } else {
        // Show pictures with the same data-tag value as the btn
            for (let imageI = 0; imageI < img.length; imageI++){
                if (img.item(imageI).dataset.tag == btn.item(i).dataset.tag){
                    img.item(imageI).style.display = "block"
                } else {
                    img.item(imageI).style.display = "none"
                }
            }
        }
        // Remove active styling from all btns
        for (let i = 0; i < btn.length; i++){
            btn.item(i).classList.remove('filter--active');
        }
        // Adds active styling to click btn
        btn.item(i).classList.add('filter--active')
    })
}