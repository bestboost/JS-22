const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
     image.addEventListener('load', onImageLoaded, {once: true});
});

function onImageLoaded(e) {
     console.log('Картинка загружена');
     e.target.classList.add('appear');
} 




     
 
