var galleryMJ = document.querySelector(".galleryMJ");
const imgLinkMJ = [
    "./Image/giraffe.jpg",
    "./Image/horse.jpg",
    "./Image/racoon.jpg",
    "./Image/tabletki.jpg",
    "./Image/kura.jpg"
];

const images = [];
 
function startLoadingMJ() 
{
    imgLinkMJ.forEach(name => {
        const imgMJ = new Image();
 
        imgMJ.addEventListener('load', e => {
            images.push(imgMJ);
            galleryMJ.appendChild(imgMJ);
            imgMJ.src = name;
        if(imgMJ.complete)
        {
            imgMJ.addEventListener(new Event('load'));
        }
    })})
}
 
startLoadingMJ();

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
            imgAJ.src = nameAJ;
        if(imgAJ.complete)
        {
            imgAJ.addEventListener(new Event('load'));
        }
    });
}
    )}

 
        
        
startLoadingAJ();
