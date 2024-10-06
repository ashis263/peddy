const getCategoryNames = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    addCategoryButton(data.categories);  
}

function addCategoryButton(categories){
    const categoryContainer = document.getElementById('category-container');
    for(category of categories){
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-outline');
        button.classList.add('border-gray-200');
        button.classList.add('rounded-xl');
        button.innerHTML = `
            <img class="w-5 sm:w-8 h-5 sm:h-8" src="${category.category_icon}"/>
            <p class="text-md sm:text-lg font-extrabold">${category.category}s</p>
        `
        categoryContainer.appendChild(button);
    }
}

getCategoryNames();