// DONE
const main = document.querySelector('#main');
const btnAddNote = document.querySelector('#btn-add-note');
const btnSave = document.querySelector('#btn-save');
btnAddNote.addEventListener('click', handleAddNewNote);
btnSave.addEventListener('click', saveNotes);

// DONE
let data = [
  {
    title: "Note title one",
    content: "Content of note one",
    id: Math.random(),
  },
  {
    title: "Note title two",
    content: "Content of note two",
    id: Math.random(),
  },
];

// DONE
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

// DONE
function buildNodeList(data) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  };
  for (const obj of data) {
    NoteCard(obj)
  };
};

// DONE
function handleAddNewNote() {
  const newNote = {
    title: '',
    content: '',
    id: Math.random(),
  }
  if (localStorage) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    const newData = [...notes, newNote];
    NoteCard(newNote);
    buildNodeList(newData)
  } else {
    NoteCard(newNote);
  }
};

// DONE
function saveNotes() {
  const noteCards = document.querySelectorAll('.note');
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

// DONE
if (localStorage.hasOwnProperty('notes')) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes);
  buildNodeList(notes);
} else {
  buildNodeList(data);
}

// TODO
function trashNote(id) {
  console.log(id)
  // const noteCards = document.querySelectorAll('.note');
  // console.log(noteCards)
  // const newNoteCards = Array.from(noteCards).filter(noteCard => noteCard.id != id);
  // buildNodeList(newNoteCards);
};