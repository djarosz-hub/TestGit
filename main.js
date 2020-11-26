const imgNames = [
    'https://picsum.photos/id/1025/367/267',
    'https://picsum.photos/id/1062/367/267',
    'https://picsum.photos/id/237/367/267',
    'https://picsum.photos/id/433/367/267',
    'https://picsum.photos/id/659/367/267'
];

const images = [];
var gallery = document.querySelector('.gallery');

function startLoading() 
{
    imgNames.forEach(name => {
        const img = new Image();

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