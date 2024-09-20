const main = document.querySelector('#main');
const btnAddNote = document.querySelector('#btn-add-note');
const btnSave = document.querySelector('#btn-save');
const btnDeleteAll = document.querySelector('#btn-delete-all');
btnAddNote.addEventListener('click', handleAddNewNote);
btnSave.addEventListener('click', saveNotes);
btnDeleteAll.addEventListener('click', deleteAllNotes);

const NoteCard = ({ title, content, id}) => {
  const noteCard = document.createElement('div');
  noteCard.setAttribute('id', id);
  noteCard.setAttribute('class', 'note');
  noteCard.innerHTML = 
  `
    <button class="btn-trash">TRASH</button>
    <div class="container-title">
      <label>
        Title
      </label>
      <textarea
        class="title"
        rows="3"
      >${title}</textarea>
    </div>
    <div class="container-content">
      <label>
        Content
      </label>
      <textarea
        class="content"
        rows="10"
      >${content}</textarea>
    </div>
  `;
  const btnTrash = noteCard.querySelector('.btn-trash');
  btnTrash.addEventListener('click', () => trashNote(id));
  main.appendChild(noteCard);
};

function buildNodeList(data) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  };
  for (const obj of data) {
    NoteCard(obj)
  };
};

function handleAddNewNote() {
  const newNote = {
    title: '',
    content: '',
    id: Math.random(),
  }
  if (localStorage.hasOwnProperty('notes')) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    const newData = [...notes, newNote];
    NoteCard(newNote);
    buildNodeList(newData)
  } else {
    NoteCard(newNote);
  }
};

function saveNotes() {
  const noteCards = document.querySelectorAll('.note');
  localStorage.clear();
  data = [];
  for (const noteCard of noteCards) {
    const title = noteCard.querySelector('.title').value;
    const content = noteCard.querySelector('.content').value;
    const id = noteCard.id;
    const noteData = { title, content, id };
    data.push(noteData);
  };
  console.log(data);
  localStorage.setItem('notes', JSON.stringify(data));
};

function trashNote(id) {
  document.getElementById(`${id}`).remove();
  const notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes)
  const newNotes = notes.filter(note => note.id != id);
  console.log(newNotes)
  localStorage.setItem('notes', JSON.stringify(newNotes));
};

function deleteAllNotes() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  };
  localStorage.clear();
};

if (localStorage.hasOwnProperty('notes')) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes);
  buildNodeList(notes);
};