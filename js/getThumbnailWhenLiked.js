const getThumbnailWhenLiked = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    addThumbnail(data.petData.image);
}

const addThumbnail = (image) => {
    const likedPetContainer = document.getElementById('liked-pet-container');
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.classList.add('p-1');
    img.classList.add('sm:p-2');
    img.classList.add('rounded-xl');
    img.classList.add('aspect-square');
    img.classList.add('object-cover');
    likedPetContainer.appendChild(img);
}