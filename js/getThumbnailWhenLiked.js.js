document.getElementById('pet-card-container')
    .addEventListener('click', function (event){
        const id = event.target.getAttribute('id');
        if(id){
            getThumbnailById(id);
        }
    });
    
const getThumbnailById = async (petId) => {
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const response = await fetch(url);
    const data = await response.json();

    const likedPetContainer = document.getElementById('liked-pet-container');
    const img = document.createElement('img');
    img.setAttribute('src', data.petData.image);
    img.classList.add('p-2');
    img.classList.add('rounded-xl');
    img.classList.add('aspect-square');
    img.classList.add('object-cover');
    likedPetContainer.appendChild(img);
}