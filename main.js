const imgNamesAJ = [
    'https://picsum.photos/id/1025/367/267',
    'https://picsum.photos/id/1062/367/267',
    'https://picsum.photos/id/237/367/267',
    'https://picsum.photos/id/433/367/267',
    'https://picsum.photos/id/659/367/267'
];

const imagesAJ = [];
var gallery = document.querySelector('.gallery');

function startLoadingAJ() 
{
    imgNamesAJ.forEach(nameAJ => {
        const imgAJ = new Image();
 
        imgAJ.addEventListener('load', e => {
            imagesAJ.push(imgAJ);
            gallery.appendChild(imgAJ);
        });

 
        imgAJ.src = nameAJ;
        if(imgAJ.complete)
        {
            imgAJ.addEventListener(new Event('load'));
        }
    });
}
startLoadingAJ();
var gallery = document.querySelector('.gallery');


const imagesAr = [
    'http://lorempixel.com/400/200/sports/1/',
    'http://lorempixel.com/400/200/sports/2/',
    'http://lorempixel.com/400/200/sports/5/',
    'http://lorempixel.com/400/200/sports/6/',
    'http://lorempixel.com/400/200/sports/9/',
    'http://lorempixel.com/400/200/sports/7/',
    'http://lorempixel.com/400/200/sports/3/'
];

const imagesPB = [];

function startLoadingPB() {
    imagesAr.forEach(imagePB => {
        const imgPB = new Image();

        imgPB.addEventListener('load', e => {
            imagesPB.push(imgPB);
            gallery.appendChild(imgPB);   });
        imgPB.src = imagePB;

        if (imgPB.complete) {
            imgPB.addEventListener(new Event('load'));
        }
    });
}

startLoadingPB();

