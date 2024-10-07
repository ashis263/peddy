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
        div.classList.add('justify-center');
        div.innerHTML = `
            <button id="${category.category}" onclick="getCategorizedPetData('${category.category}')" class="btn btn-outline w-full category-btn border-gray-200 rounded-xl ${category.category}">
                <img class="w-5 sm:w-8 h-5 sm:h-8 " src="${category.category_icon}"/>
                <p class="text-md sm:text-lg font-extrabold">${category.category}s</p>
            </button>
        `
        categoryContainer.appendChild(div);
    }
}

getCategoryNames();