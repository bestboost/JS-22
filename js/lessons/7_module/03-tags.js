const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTargetContainerClick);

// function onTargetContainerClick (e) {
//     if(e.target.nodeName !== 'BUTTON') {
//      return;
//     }
    
//     const currentActiveBtn = document.querySelector('.tags__btn--active')
    
//      if(currentActiveBtn) {
//          currentActiveBtn.classList.remove('tags__btn--active') 
//      }
//      // currentActiveBtn?.classList.remove('tags__btn--active'); 

//      const nextActiveBtn = e.target
//      nextActiveBtn.classList.add('tags__btn--active');
//      selectedTag = nextActiveBtn.dataset.value;

//      console.log("selectedTag:", selectedTag);
// }

tagsContainer.addEventListener('click', onTargetContainerClick);
const selectedTags = new Set();

function onTargetContainerClick (e) {
    if(e.target.nodeName !== 'BUTTON') {
     return;
    };

    const btn = e.target
    const tag = btn.dataset.value
    const isActivBtn = btn.classList.contains('tags__btn--active');

    if(isActivBtn) {
       selectedTags.delete(tag);
    } else {
     selectedTags.add(tag);
    };

    btn.classList.toggle('tags__btn--active');
    console.log("selectedTags:", selectedTags);
};  