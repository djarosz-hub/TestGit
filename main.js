var gallery = document.querySelector(".gallery");
const imgLink = [
    "./Image/giraffe.jpg",
    "./Image/horse.jpg",
    "./Image/racoon.jpg",
    "./Image/tabletki.jpg",
    "./Image/kura.jpg"
];

const images = [];
 
function startLoading() 
{
    imgLink.forEach(name => {
        const img = new Image();
 
        img.addEventListener('load', e => {
            images.push(img);
            gallery.appendChild(img);
        });
 
        img.src = name;
        if(img.complete)
        {
            img.addEventListener(new Event('load'));
        }
    });
}
 
startLoading();