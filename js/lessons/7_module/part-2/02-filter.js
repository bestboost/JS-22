const tech = [
     { label: 'HTML' },
     { label: 'CSS' },
     { label: 'JavaScript' },
     { label: 'Node.js' },
     { label: 'React' },
     { label: 'Vue' },
     { label: 'Next.js' },
     { label: 'Mobx' },
     { label: 'Redux' },
     { label: 'React Router' },
     { label: 'GraphQl' },
     { label: 'PostgreSQL' },
     { label: 'MongoDB' },
   ];
   
   /*
    * 1. Рендерим разметку элементов списка
    * 2. Слушаем изменение фильтра
    * 3. Фильтруем данные и рендерим новые элементы
    */
   
   const refs = {
     list: document.querySelector('.js-list'),
     input: document.querySelector('#filter'),
   };

   refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

   const listItemsMarkup = createListItemsMurkup(tech);
   populateList(listItemsMarkup);

function createListItemsMurkup(items){
     return items.map(item => `<li>${item.label}</li>`).join('');
   };

function onFilterChange(e) {
     const filter = e.target.value.toLowerCase();

     const filtredItems = tech.filter(t => 
          t.label.toLowerCase().includes(filter),
     );
    
     const listItemsMarkup = createListItemsMurkup(filtredItems);
     populateList(listItemsMarkup);   
     
};

function populateList(markup) {
     refs.list.innerHTML = markup;
}