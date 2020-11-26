const imgNames1 = [
    'https://picsum.photos/id/1025/367/267',
    'https://picsum.photos/id/1062/367/267',
    'https://picsum.photos/id/237/367/267',
    'https://picsum.photos/id/433/367/267',
    'https://picsum.photos/id/659/367/267'
];

const images1 = [];
var gallery = document.querySelector('.gallery');

function startLoading1() 
{
    imgNames1.forEach(name1 => {
        const img1 = new Image();
 
        img1.addEventListener('load', e => {
            images1.push(img1);
            gallery.appendChild(img1);
        });

 
        img1.src = name1;
        if(img1.complete)
        {
            img1.addEventListener(new Event('load'));
        }
    });
}

 
startLoading1();