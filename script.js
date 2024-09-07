// select static elements
const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');

// create event listener
btnAddNote.addEventListener('click', handleAddNote);

function handleAddNote() {
  console.log('add note');
}