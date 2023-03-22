const allItems = document.querySelectorAll('.site-nav__item');
console.log("🚀 ~ file: DOM-traversal.js:2 ~ allItems:", allItems)

const items = document.querySelector('li');
console.log("🚀 ~ file: DOM-traversal.js:6 ~ items:", items)

const neighbour = items.nextElementSibling;
console.log("🚀 ~ file: DOM-traversal.js:5 ~ neighbour:", neighbour)

const lastNeighbour = neighbour.nextElementSibling;
console.log("🚀 ~ file: DOM-traversal.js:11 ~ lastNeighbour:", lastNeighbour)

const parentItem = items.parentNode;
console.log("🚀 ~ file: DOM-traversal.js:5 ~ parentItem:", parentItem)

const childrenItem = items.children;
console.log("🚀 ~ file: DOM-traversal.js:8 ~ childrenItem:", childrenItem)

const all = document.querySelector('ul');
console.log("🚀 ~ file: DOM-traversal.js:11 ~ all:", all)

const lastChildOfAll = all.lastElementChild;
console.log("🚀 ~ file: DOM-traversal.js:14 ~ lastChildOfAll:", lastChildOfAll)


