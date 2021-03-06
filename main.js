const imgNamesAJ = [
    'https://picsum.photos/id/1025/367/267',
    'https://picsum.photos/id/1062/367/267',
    'https://picsum.photos/id/237/367/267',
    'https://picsum.photos/id/433/367/267',
    'https://picsum.photos/id/659/367/267'
];

const imagesAJ = [];
const galleryAJ = document.getElementById('AJ');

function startLoadingAJ() 
{
    imgNamesAJ.forEach(nameAJ => {
        const imgAJ = new Image();
 
        imgAJ.addEventListener('load', e => {
            imagesAJ.push(imgAJ);
            galleryAJ.appendChild(imgAJ);
        });

 
        imgAJ.src = nameAJ;
        if(imgAJ.complete)
        {
            imgAJ.addEventListener(new Event('load'));
        }
    });
}
startLoadingAJ();


const djGal = document.getElementById('DJ');
const djNames = [
    'https://picsum.photos/id/237/400/300',
    'https://picsum.photos/id/238/400/300',
    'https://picsum.photos/id/239/400/300',
    'https://picsum.photos/id/240/400/300',
    'https://picsum.photos/id/241/400/300',
];

function startLoadingDJ() 
{
    djNames.forEach(djEl => {
        const imgDJ = new Image();
 
        imgDJ.addEventListener('load', () => {
            djGal.appendChild(imgDJ);
        });

 
        imgDJ.src = djEl;
        if(imgDJ.complete)
        {
            imgDJ.addEventListener(new Event('load'));
        }
    });
}
startLoadingDJ();


const galleryPB = document.getElementById('PB');
const imagesAr = [
    'http://lorempixel.com/400/200/sports/1/',
    'http://lorempixel.com/400/200/sports/2/',
    'http://lorempixel.com/400/200/sports/5/',
    'http://lorempixel.com/400/200/sports/6/',
    'http://lorempixel.com/400/200/sports/9/'
];

const imagesPB = [];

function startLoadingPB() {
    imagesAr.forEach(imagePB => {
        const imgPB = new Image();

        imgPB.addEventListener('load', e => {
            imagesPB.push(imgPB);
            galleryPB.appendChild(imgPB);   });
        imgPB.src = imagePB;

        if (imgPB.complete) {
            imgPB.addEventListener(new Event('load'));
        }
    });
}

startLoadingPB();

const galleryMG=document.getElementById('MG');
const imagesMG=[
            'https://picsum.photos/id/1/500/800',
            'https://picsum.photos/id/2/500/800',
            'https://picsum.photos/id/3/500/800',
            'https://picsum.photos/id/4/500/800',
            'https://picsum.photos/id/5/500/800'
    ]

    function startLoadingMG() {
        imagesMG.forEach(imageMG => {
            const imgMG = new Image();
    
            imgMG.addEventListener('load', e => {
                imagesMG.push(imgMG);
                galleryMG.appendChild(imgMG);   });
            imgMG.src = imageMG;
    
            if (imgMG.complete) {
                imgMG.addEventListener(new Event('load'));
            }
        });
    }
    
    startLoadingMG();

    const galleryMJ = document.getElementById('MJ');
    const imagesMJ = [
        './Image/giraffe.jpg',
        './Image/horse.jpg',
        './Image/racoon.jpg',
        './Image/tabletki.jpg',
        './Image/kura.jpg'
    ];
    const imagesStackMJ = [];

function startLoadingMJ() {
    imagesMJ.forEach(imageMJ => {
        const imgMJ = new Image();

        imgMJ.addEventListener('load', e => {
            imagesStackMJ.push(imgMJ);
            galleryMJ.appendChild(imgMJ);   });
        imgMJ.src = imageMJ;

        if (imgMJ.complete) {
            imgMJ.addEventListener(new Event('load'));
        }
    });
}

startLoadingMJ();