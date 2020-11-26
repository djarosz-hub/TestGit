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