// select static elements
const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');

// create event listener
btnAddNote.addEventListener('click', handleAddNote);

function handleAddNote() {
  console.log('add note');
  // create a note element
  const note = document.createElement('div');
  // give it substance
  note.classList.add('note');
  note.innerHTML = 
  `
    <div class="actions">
      <button>SAVE</button>
      <button>TRASH</button>
    </div>
    <div class="title-container">
      <textarea
        class="title"
        placeholder="What is this called?"
      >
      </textarea>
    </div>
    <div class="content-container">
      <textarea
        class="content"
        placeholder="What do you ache to say?'
      >
      </textarea>
    </div>
  `;
  // render it
  main.appendChild(note);
}