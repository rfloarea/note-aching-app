// select static elements
const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');
btnAddNote.addEventListener('click', handleAddNote);

function handleAddNote() {
  console.log('add note');
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = 
  `
    <div class="buttons">
      <button class="btn-save">SAVE</button>
      <button class="btn-trash">TRASH</button>
    </div>
    <div class="container-title">
      <textarea
        class="title"
        placeholder="What is this called?"
      >
      </textarea>
    </div>
    <div class="container-content">
      <textarea
        class="content"
        placeholder="What do you ache to say?'
      >
      </textarea>
    </div>
  `;
  // event listeners
  const btnSave = note.querySelector('.btn-save');
  const btnTrash = note.querySelector('.btn-trash');
  btnSave.addEventListener('click', handleSaveNote);
  btnTrash.addEventListener('click', handleTrashNote);
  // event handlers
  function handleSaveNote() {
    console.log('save note');
  };
  function handleTrashNote() {
    console.log('trash note');
    note.remove();
  };

  main.appendChild(note);
}