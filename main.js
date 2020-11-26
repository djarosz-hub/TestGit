
const imgLinkMJ = [
    './Image/giraffe.jpg',
    './Image/horse.jpg',
    './Image/racoon.jpg',
    './Image/tabletki.jpg',
    './Image/kura.jpg'
];

const imagesMJ = [];
 
function startLoadingMJ() 
{
    
    var galleryMJ = document.createElement('div');
    document.body.appendChild(galleryMJ);
    galleryMJ.classList.add('gallery');
    imgLinkMJ.forEach(name => {
        const imgMJ = new Image();
 
        imgMJ.addEventListener('load', e => {
            imagesMJ.push(imgMJ);
            galleryMJ.appendChild(imgMJ);
        });
 
        imgMJ.src = name;
        if(imgMJ.complete)
        {
            imgMJ.addEventListener(new Event('load'));
        }
    });
}
 
startLoadingMJ();