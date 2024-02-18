'use strict'
const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');
const numberOfCategories = categories.length;
console.log('Number of categories:', numberOfCategories);
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul > li');
    const numberOfElements = categoryElements.length;
    console.log('Category:', categoryName);
    console.log('Elements:', numberOfElements);
});





