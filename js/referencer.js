const images = document.querySelectorAll('.personImg');
const textDisplay = document.getElementById('textDisplay');
const container = document.getElementById('personImgContainer');

// Text displayed
const statements = [
    {   
        text: '"Jeg har igennem årene brugt CLC rustfri mange gange, vi er en mindre produktionsvirksomhed der har brug for reparationer på vores maskiner ind i mellem, der har CLC hver gang leveret højkvalitet og flot håndværk"',
        name: '"Katarina Brink"'
    },
    {
        text: '"Peder konstruerede vores altan, til vores nybyggede villahus. Altanen står rigtig flot og vi er meget tilfredse"',
        name: '"Viggo Mikkelsen"'
    },
    {
        text: '"CLC rustfri levere altid et godt stykke arbejde"',
        name: '"Alexander Reuter"'
    },
    {
        text: '"Tingene bliver gjort til tiden og er der noget der haster så bliver det gjort i en fart, der er noget mig om min virksomhed sætter stor pris på"',
        name: '"Kim Potnia"'
    }
]

const rotationTime = 3000;

let counter = 0;
function myInterval(){
    if (innerWidth > 768){
        //Put the text and mane in the textbox
        textDisplay.innerHTML = statements[counter].text + `<br>` + statements[counter].name;

        //reset the stylings
        for (let i = 0; i < images.length; i++){
            images.item(i).style.filter = "grayscale(100%)";
        }

        //add color to the targeted picture
        images.item(counter).style.filter = "grayscale(0%)";

        //Count from 0 to 3, and restart
        counter == images.length - 1 ? counter = 0 : counter += 1;
    }
}

myInterval();

var rotation = setInterval(() => {
    myInterval();
}, rotationTime);

for (let i = 0; i < images.length; i++){
    images.item(i).addEventListener('mouseover', () => {
        //put text and name in the textbox
        textDisplay.innerHTML = statements[i].text + `<br>` + statements[i].name;

        //Stop the interval
        clearInterval(rotation);

        //Remove the inline stylings
        for (let i = 0; i < images.length; i++){
            images.item(i).style.filter = "";
        }
    });
};

container.addEventListener('mouseleave', () => {
    rotation = setInterval(() => {
        myInterval();
    }, rotationTime);
});