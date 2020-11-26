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
        const img = new Image();
 
        img.addEventListener('load', e => {
            images.push(img);
            galleryMJ.appendChild(img);
        });
 
        img.src = name;
        if(img.complete)
        {
            img.addEventListener(new Event('load'));
        }
    });
}
 
startLoadingMJ();