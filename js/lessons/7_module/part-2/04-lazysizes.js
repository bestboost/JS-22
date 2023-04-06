if ('loading' in HTMLImageElement.prototype) {
     // supported in browser
     console.log('Браузер поддерживает ленивки')
  addSrcAttrToLaziimages();
   } else {
     // fetch polyfill/third-party library
     console.log('Браузер НЕ поддерживает ленивки')
   addLazisizesScript();
};

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
     image.addEventListener('load', onImageLoaded, {once: true});
});

function onImageLoaded(e) {
     console.log('Картинка загружена');
     e.target.classList.add('appear');
}; 

function addLazisizesScript() {
     const script = document.createElement('script');
     script.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
   script.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="; 
   script.crossorigin="anonymous"; 
 //  referrerpolicy="no-referrer";
  
   document.body.appendChild(script);
};

function addSrcAttrToLaziimages() {
     const lazyImages = document.querySelectorAll('img[loading="lazy"]');

     lazyImages.forEach(img => {
          img.src = img.dataset.src;
});
};