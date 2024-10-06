const getCategoryNames = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    addCategoryButton(data.categories);  
}

function addCategoryButton(categories){
    const categoryContainer = document.getElementById('category-container');
    for(category of categories){
        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('gap-2');
        div.classList.add('justify-center');
        div.classList.add('items-center');
        div.classList.add('border-2');
        div.classList.add('rounded-full');
        div.classList.add('px-5');
        div.classList.add('py-2');
        div.innerHTML = `
            <img class="w-8 h-8" src="${category.category_icon}"/>
            <p class="text-lg font-extrabold">${category.category}s</p>
        `
        categoryContainer.appendChild(div);
    }
}

getCategoryNames();