const modalElement = document.querySelector('.modal');
const modalCloseElement = document.querySelector('.modal-close');
const buttonContactsElement = document.querySelector('.button-contacts');

modalCloseElement.addEventListener('click', function(event) {
  event.preventDefault();
  modalElement.classList.add('visually-hidden');
});

buttonContactsElement.addEventListener('click', function(event) {
  event.preventDefault();
  modalElement.classList.remove('visually-hidden');
});

const sliderElement = document.querySelector('.slider');

if (sliderElement) {

  const slideElement1 = sliderElement.querySelector('#slide-1');
  const slideElement2 = sliderElement.querySelector('#slide-2');
  const slideElement3 = sliderElement.querySelector('#slide-3');

  const togglerElement1 = sliderElement.querySelector('#toggler-1');
  const togglerElement2 = sliderElement.querySelector('#toggler-2');
  const togglerElement3 = sliderElement.querySelector('#toggler-3');

  togglerElement1.addEventListener('click', function() {
    slideElement1.classList.remove('shown');
    slideElement2.classList.remove('shown');
    slideElement3.classList.remove('shown');

    slideElement1.classList.add('shown');

    togglerElement1.classList.remove('checked');
    togglerElement2.classList.remove('checked');
    togglerElement3.classList.remove('checked');

    togglerElement1.classList.add('checked');
  });

  togglerElement2.addEventListener('click', function() {
    slideElement1.classList.remove('shown');
    slideElement2.classList.remove('shown');
    slideElement3.classList.remove('shown');

    slideElement2.classList.add('shown');

    togglerElement1.classList.remove('checked');
    togglerElement2.classList.remove('checked');
    togglerElement3.classList.remove('checked');

    togglerElement2.classList.add('checked');
  });

  togglerElement3.addEventListener('click', function() {
    slideElement1.classList.remove('shown');
    slideElement2.classList.remove('shown');
    slideElement3.classList.remove('shown');

    slideElement3.classList.add('shown');

    togglerElement1.classList.remove('checked');
    togglerElement2.classList.remove('checked');
    togglerElement3.classList.remove('checked');

    togglerElement3.classList.add('checked');
  });
}

