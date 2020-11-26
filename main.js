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
const djGal = document.getElementById('DJ');
const djNames = [
    'https://picsum.photos/id/237/400/300',
    'https://picsum.photos/id/237/400/300',
    'https://picsum.photos/id/237/400/300',
    'https://picsum.photos/id/237/400/300',
    'https://picsum.photos/id/237/400/300',
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