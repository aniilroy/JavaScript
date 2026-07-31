const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//open modal function
const openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

//calling openModal function
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal);

//close modal function
const closeModal = function() {
        modal.classList.add('hidden')
        overlay.classList.add('hidden');
    }
//Calling closeModal Function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


