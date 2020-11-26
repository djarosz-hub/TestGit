const galeriaPB = document.querySelector('.galleryPB');


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
    imagesArPB.forEach(imagePB => {
        const imgPB = new Image();

        imgPB.addEventListener("load", e => {
            imagesPB.push(imgPB);
            galeriaPB.appendChild(imgPB)   });
        imgPB.src = imagePB;

        if (imgPB.complete) {
            imgPB.addEventListener(new Event('load'));
        }
    });
}

startLoadingPB();

