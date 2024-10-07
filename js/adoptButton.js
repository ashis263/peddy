function showAdoptModal(id){
    const adoptButton = document.getElementById(id+'_');
    const adoptModal = document.getElementById('adopt-modal');
    adoptModal.showModal();
    document.getElementById('counter').innerHTML = 3;
    let counter = 2;
    const intervalId = setInterval(() => {
        if(counter === 0){
            clearInterval(intervalId);
        }else{
            document.getElementById('counter').innerHTML = counter;
        }
        counter--;
    }, 1000);
    setTimeout(() => {
        adoptModal.close();
    }, 3000);
    adoptButton.setAttribute('disabled', true);
}