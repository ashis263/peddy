const getPetData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    addPetCard(data.pets);
}

function addPetCard(pets) {
    const petCardContainer = document.getElementById('pet-card-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.classList.remove('hidden');
    setTimeout(() => {
        for (let pet of pets) {
            const div = document.createElement('div');
            div.classList.add('p-2');
            div.classList.add('border-2');
            div.classList.add('rounded-xl');
            div.classList.add('space-y-1');
            div.innerHTML = `
                <img src="${pet.image}" class="rounded"/>
                <h3 class="text-md font-extrabold">${pet.pet_name}</h3>
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
    
                    <p class="text-gray-500 text-xs sm:text-md">Breed: ${(pet.breed === undefined || pet.breed === null)? 'Not Available' : pet.breed}</p>
                </div>
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
    
                    <p class="text-gray-500 text-xs sm:text-md">Birth: ${(pet.date_of_birth === undefined || pet.date_of_birth === null)? 'Not Available' : pet.date_of_birth.split('-')[0]}</p>
                </div>
                <div class="flex gap-4 items-center">
                    <i class="fa-solid fa-venus-mars text-gray-500 w-1 p-0"></i>
                    <p class="text-gray-500 text-xs sm:text-md">Gender: ${(pet.gender === undefined || pet.gender === null)? 'Not Available' : pet.gender}</p>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-dollar-sign text-gray-500 w-1 p-0"></i>
                    <p class="text-gray-500 text-xs sm:text-md">Price: ${(pet.price === undefined || pet.price === null)? 'Not Available' : pet.price} $</p>
                </div>
                <div class="flex justify-between pt-2">
                    <button class="btn btn-outline p-1 border-gray-200 btn-sm">
                    <i id="${pet.petId}" class="fa-regular fa-thumbs-up"></i>
                </>
                <button class="btn btn-outline btn-sm text-xs p-1 border-gray-200 text-colorPrimary">Adopt</>
                <button class="btn btn-outline btn-sm text-xs p-1 border-gray-200 text-colorPrimary">Details</>
            </div>
            `
            petCardContainer.appendChild(div);
        }
        loadingSpinner.classList.add('hidden');
    }, 2000);
}

getPetData();